import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
    width: 100%;
    height: ${RFValue(56)}px;

    background-color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    border-radius: 5px;

    margin-bottom: ${RFValue(8)}px;

    padding-left: ${RFValue(18)}px;
`;