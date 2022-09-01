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
import { AuthContext } from "../../contexts/AuthContest";

export function SignIn(){
    const context = useContext(AuthContext);

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
                    />
                    <SignInButton 
                        title="Entrar com Apple"
                        svg={AppleSVG}
                    />
                </SignInButtonContainer>

            </Footer>

        </Container>
    );
}