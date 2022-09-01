import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { Container, IconContainer, Title } from "./styles";

interface SignInButtonProps extends RectButtonProps{
    title: string;
    svg: React.FC<SvgProps>;   
}

export function SignInButton({
    title,
    svg: Svg,
    ...rest
}: SignInButtonProps){
    return (
        <Container {...rest}>
            <IconContainer>
                <Svg />
            </IconContainer>
            <Title>
                {title}
            </Title>
        </Container>
    );
}