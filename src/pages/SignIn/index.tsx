import React, {useContext} from "react";

import {
    Container,
    Header,
    SignInContainer,
    Footer,
    TitleContainer,
    Title,
    SignInTitle,
    SignInButtonContainer
}
from './styles'

import LogoSVG from '../../assets/svg/logo.svg';
import GoogleSVG from '../../assets/svg/google.svg'
import AppleSVG from '../../assets/svg/apple.svg'
import { SignInButton } from "../../Components/SignInButton";
import { useAuth } from "../../hooks/auth";
import { Alert } from "react-native";

export function SignIn(){
    const {signInWithGoogle, signInWithApple} = useAuth();
    
    async function handleSignInWithGoogle(){
        try{
            await signInWithGoogle();
        }catch(error){
            console.log(error);
            Alert.alert("Não foi possível conectar com a conta google.");
        }
    }

    async function handleSignInWithApple(){
        try{
            await signInWithApple();
        }catch(error){
            console.log(error);
            Alert.alert("Não foi possível conectar com a conta Apple.");
        }
    }

    return (
        <Container>
            <Header>
                <TitleContainer>
                    <LogoSVG />
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleContainer>
                <SignInContainer>
                    <SignInTitle>
                        Faça seu login com {'\n'}
                        uma das contas abaixo
                    </SignInTitle>
                </SignInContainer>
            </Header>
            <Footer>
                <SignInButtonContainer>
                    <SignInButton 
                        title="Entrar com Google"
                        svg={GoogleSVG}
                        onPress={handleSignInWithGoogle}
                    />
                    <SignInButton 
                        title="Entrar com Apple"
                        svg={AppleSVG}
                        onPress={handleSignInWithApple}
                    />
                </SignInButtonContainer>

            </Footer>

        </Container>
    );
}