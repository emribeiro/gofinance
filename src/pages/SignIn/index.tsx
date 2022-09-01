import React from "react";

import {
    Container,
    Header,
    SignInContainer,
    Footer,
    TitleContainer,
    Title,
    SignInTitle
}
from './styles'

import LogoSVG from '../../assets/svg/logo.svg';

export function SignIn(){
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

            </Footer>

        </Container>
    );
}