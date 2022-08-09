import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.primary};

    width: 100%;
    height: ${RFValue(119)}px;

    justify-content: flex-end;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

    margin-bottom: ${RFValue(18)}px;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;

    padding: 24px;
    justify-content: space-between;
`;

export const InputGroup = styled.View``;

export const TransactionTypeGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
`;

