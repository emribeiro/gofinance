import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import  Feather from "@expo/vector-icons/Feather"


export const Container = styled.View`
    width: ${RFValue(156)}px;
    height: ${RFValue(124)}px;
    background-color: ${({theme}) => theme.colors.shape};
    padding: 8px 10px;
    border-radius: 5px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(36)}px;
    color: ${({theme}) => theme.colors.success};
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(18)}px;
`;

export const Content = styled.View`
`;

export const Amount = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(33)}px;
`;

export const Footer = styled.View`
    margin-top: ${RFValue(4)}px;
`;

export const LastTransaction = styled.Text`
    font-weight: 200;
    font-size: ${RFValue(8)}px;
    line-height: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text};
`;