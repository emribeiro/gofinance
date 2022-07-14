import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import  Feather from "@expo/vector-icons/Feather"

interface TypeProps{
    type: "income" | "outcome";
}

export const Container = styled.View`
    width: ${RFValue(156)}px;
    height: ${RFValue(124)}px;
    background-color: ${({theme}) => theme.colors.shape};
    padding: 8px 10px;
    border-radius: 16px;
    margin-left: 8px;
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(36)}px;

    ${(props) => props.type === "income" && css`
        color: ${({theme}) => theme.colors.success};
    `}

    ${(props) => props.type === "outcome" && css`
        color: ${({theme}) => theme.colors.attention};
    `}
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.medium};
`;

export const Content = styled.View`
`;

export const Amount = styled.Text`
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(33)}px;
    font-family: ${({theme}) => theme.fonts.medium};
`;

export const Footer = styled.View`
    margin-top: ${RFValue(4)}px;
`;

export const LastTransaction = styled.Text`
    font-size: ${RFValue(8)}px;
    line-height: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
`;