import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import  Feather from "@expo/vector-icons/Feather"
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList, FlatListProps } from "react-native";
import { DataListProps } from ".";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Header = styled.View`
    width: 100%;
    //height: ${RFPercentage(42)}px;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
`;

export const UserContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    margin-top: ${getStatusBarHeight() + RFValue(18)}px;
`;
export const UserInfo = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;

`;

export const UserAvatar = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 16px;
`;

export const UserGreeting = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.secondary};
`;

export const CardsContainer = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(16)}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: 16px;
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-bottom: 12px;
`;

export const TransactionList = styled(
        FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``;

export const LogoutButton = styled(BorderlessButton)``;


