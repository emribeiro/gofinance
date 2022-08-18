import styled, { css } from "styled-components/native";

import  Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface ContainerProps{
    type: "income" | "outcome";
    isActive: boolean;
}

interface IconProps{
    type: "income" | "outcome";
}

export const Container = styled(RectButton)<ContainerProps>`
    width: 48%;
    border: 1.5px solid ${({theme}) => theme.colors.text};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    flex-direction: row;

    ${({type, isActive}) => type === 'income' && isActive && css`
        background-color: ${({theme}) => theme.colors.success_light};
        border: 0;
    `};

    ${({type, isActive}) => type === 'outcome' && isActive && css`
        background-color: ${({theme}) => theme.colors.attention_light};
        border: 0;
    `};
`;

export const Icon = styled(Feather)<IconProps>`
    font-size:  ${RFValue(24)}px;
    margin-right: ${RFValue(12)}px;
    color: ${({theme, type}) => type === "income" ? theme.colors.success : theme.colors.attention}
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
`;