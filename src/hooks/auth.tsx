import { createContext, ReactNode, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps{
    children: ReactNode;
}

interface IAuthContextData{
    user: User;
    signInWithGoogle(): Promise<void>;
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

    async function signInWithGoogle(){
        try{
            const CLIENT_ID = '828527345435-m9ntgfpdjr8mlp72v0t74ac86rda9k5j.apps.googleusercontent.com';
            const REDIRECT_URI = 'https://auth.expo.io/@emribeiro/gofinances';
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');
    
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    
            const {type, params} = await AuthSession.startAsync({authUrl}) as GoogleAuthInfo;
    
            if(type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();
    
                setUser({
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                })

                console.log(user);
            }
    
        }catch(e){
            throw new Error(e);
        }
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}} >
            {children}
        </AuthContext.Provider>
    );
}



function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth}