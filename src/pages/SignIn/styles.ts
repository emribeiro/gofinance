import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 70%;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 144px 48px;
    justify-content: flex-start;
    align-items: center;
`;

export const TitleContainer = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(26)}px;
    text-align: center;
    margin-top: 40px;

`;

export const SignInContainer = styled.View`
    margin-top: 80px;
`;

export const SignInTitle = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    text-align: center;
`;

export const Footer = styled.View`
    width: 100%;
    height: 30%;
    background-color: ${({theme}) => theme.colors.secondary};
`;

