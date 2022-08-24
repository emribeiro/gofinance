import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

interface ContainerProps{
    color: string;
}

export const Container = styled.View<ContainerProps>`
    background-color: ${({theme}) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;

    border-radius: 5px;
    border-left-width: 5px;
    border-left-color: ${({color}) => color};

    margin-bottom: 8px;
    
`;

export const IconContainer = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 1px solid ${({theme}) => theme.colors.text};
    margin-right: 12px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;
