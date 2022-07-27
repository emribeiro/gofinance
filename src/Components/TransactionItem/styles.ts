import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import  Feather from "@expo/vector-icons/Feather"

interface TransactionProps{
    type: "income" | "outcome";
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 14px 8px;
    background-color: ${({theme}) => theme.colors.shape};
    align-items: center;
    border-radius: 8px;
    margin-bottom: 16px;
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

export const Content = styled.View`
    flex: 1;
`;

export const TransactionContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(18)}px;
`;

export const Amount = styled.Text<TransactionProps>`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
    color: ${({theme, type}) => type === "income" ? theme.colors.success : theme.colors.attention};
    line-height: ${RFValue(18)}px;
`;

export const CategoryContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CategoryName = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.text};
    line-height: ${RFValue(15)}px;
`;

export const Date = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.text};
    line-height: ${RFValue(15)}px;
`;

