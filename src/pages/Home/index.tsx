import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

import { BalanceCard } from "../../Components/BalanceCard";
import { Card } from "../../Components/Card";
import { TransactionItem, TransactionItemData } from "../../Components/TransactionItem";
import { Container
       , Header
       , UserAvatar
       , User
       , UserGreeting
       , UserInfo
       , UserName, 
       UserContainer,
       Icon
       , CardsContainer
       , Transactions
       , Title,
       TransactionList
       , LogoutButton
    } from "./styles";

export interface DataListProps extends TransactionItemData{
    id: string,
}

export function Home(){
    const dataKey = '@gofinance:transactions';
    const [data, setData] = useState<DataListProps[]>([]);

    async function loadTransactions(){
        const data = await AsyncStorage.getItem(dataKey);
        const currentData = data ? JSON.parse(data) : [];

        const formattedData : DataListProps[] = currentData
                                                    .map((item : DataListProps) => {
                                                        return {
                                                            id: item.id,
                                                            name: item.name,
                                                            type: item.type,
                                                            amount: item.amount.toLocaleString('pt-BR', { style: 'currency'
                                                                                                        , currency: 'BRL'}
                                                                                              ),
                                                            date: Intl.DateTimeFormat('pt-BR', {
                                                                day: '2-digit',
                                                                month: '2-digit',
                                                                year: 'numeric'
                                                            }).format(new Date(item.date)),
                                                            categoryKey: item.categoryKey
                                                        }
                                                    });

        setData(formattedData);
    }

    useEffect( () => {
        loadTransactions()
    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, []));

    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <UserAvatar 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/18245701?s=40&v=4'}} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Eric</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton>
                        <Icon name="log-out"/>
                    </LogoutButton>
                </UserContainer>

                <CardsContainer>
                    <Card 
                        type="income"
                        title="Total de Entradas"
                        amount="R$ 17.400,00"
                        lastTransaction="Última entrada dia 13 de abril"
                    />    
                    <Card 
                        type="outcome"
                        title="Total de Saídas"
                        amount="R$ 1.259,00"
                        lastTransaction="Última saída dia 03 de abril"
                    />
                </CardsContainer>
                <BalanceCard 
                    transactionTime="De 01 a 13 de Abril"
                    amount="R$ 16.141,00"
                />
            </Header>
            <Transactions>
                <Title>Últimas Transações</Title>
                <TransactionList 
                    data={data}
                    keyExtractor = { item => item.id}
                    renderItem={({item}) => <TransactionItem data={item}/>}
                />
                
            </Transactions>
        </Container>
    )
}
