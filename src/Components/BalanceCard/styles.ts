import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import  Feather from "@expo/vector-icons/Feather"

export const Container = styled.View`
    width: ${RFValue(326)}px;
    height: ${RFValue(57)}px;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 16px;
    margin: ${RFValue(16)}px;
    flex-direction: row;
    padding: ${RFValue(12)}px ${RFValue(8)}px;
    align-items: center;
    justify-content: space-between;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(32)}px;
    color: ${({theme}) => theme.colors.shape};
`;

export const DescriptionContainer = styled.View``;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`;

export const TransactionTime = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
`;

export const Amount = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(22)}px;
`;