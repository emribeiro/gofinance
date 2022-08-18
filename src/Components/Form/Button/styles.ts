import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    background-color: ${({theme}) => theme.colors.secondary};
    align-items: center;
    border-radius: 5px;
    padding: ${RFValue(18)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
`;
