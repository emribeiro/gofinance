import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import theme from "../../global/theme";
import { TouchableOpacity } from "react-native";

interface CategoryProps{
    isActive: boolean;
}

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

export const Category = styled(TouchableOpacity)<CategoryProps>`
    flex-direction: row;
    padding: 16px 18px;

    background-color: ${({isActive}) => 
        isActive ? theme.colors.secondary : theme.colors.background  
    }
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 8px;
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.colors.text};
`;

export const Footer = styled.View`
    margin-bottom: 16px;
    padding: 16px;
`;