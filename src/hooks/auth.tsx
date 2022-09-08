import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps{
    children: ReactNode;
}

interface IAuthContextData{
    user: User;
    signInWithGoogle(): Promise<void>;
    signInWithApple(): Promise<void>;
    signOut(): Promise<void>;
}

interface GoogleAuthInfo{
    params: {
        access_token: string;
    };
    type: string;

}

interface User{
    id: string;
    name: string;
    email: string;
    photo?: string;
}
const AuthContext = createContext({} as IAuthContextData);


function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User);
    const [userStorageLoading, setUserStorageLoading] = useState(true);
    
    async function signInWithGoogle(){
        const {CLIENT_ID} = process.env;
        const {REDIRECT_URI}  = process.env;
        try{
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');
    
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    
            const {type, params} = await AuthSession.startAsync({authUrl}) as GoogleAuthInfo;
    
            if(type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();
    
                const userLogged = {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                };

                setUser(userLogged)

                await AsyncStorage.setItem('@gofinances:user', JSON.stringify(userLogged));
            }
    
        }catch(e){
            throw new Error(e);
        }
    }

    async function signInWithApple(){
        try {
            const credentials = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ]
            });

            if(credentials){
                const name = credentials.fullName!.givenName!;
                const photo = `https://ui-avatars.com/api/?name=${name}&length=1`;
                const userLogged = {
                    id: String(credentials.user),
                    email: credentials.email!,
                    name,
                    photo 
                };
                setUser(userLogged);

                await AsyncStorage.setItem('@gofinances:user', JSON.stringify(userLogged));
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async function signOut(){
        console.log("desconectando");
        setUser({} as User);
        await AsyncStorage.removeItem('@gofinances:user');
    } 
    useEffect(() => {
        async function loadUserStorageData(){
            const userStoraged = await AsyncStorage.getItem('@gofinances:user');

            if(userStoraged){
                const userLogged = JSON.parse(userStoraged) as User;
                setUser(userLogged);
            }

            setUserStorageLoading(false);
        }

        loadUserStorageData()
    }, []);

    return (
        <AuthContext.Provider value={{user, signInWithGoogle, signInWithApple, signOut}} >
            {children}
        </AuthContext.Provider>
    );
}



function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth}