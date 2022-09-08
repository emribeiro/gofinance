import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

import { BalanceCard } from "../../Components/BalanceCard";
import { Card } from "../../Components/Card";
import { LoadIndicator } from "../../Components/LoadIndicator";
import { TransactionItem, TransactionItemData } from "../../Components/TransactionItem";
import { useAuth } from "../../hooks/auth";
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

interface TotalAmountData {
    amount: string,
    lastTransactionDate: string
}

interface ResumeData {
    totalIncome: TotalAmountData,
    totalOutcome: TotalAmountData
    balance: string
}

export function Home(){
    const dataKey = '@gofinance:transactions';
    const [data, setData] = useState<DataListProps[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [resumeData, setResumeData] = useState<ResumeData>({
        totalIncome: {
            amount: "R$ 0,00",
            lastTransactionDate: ""
        }, 
        totalOutcome: {
            amount: "R$ 0,00",
            lastTransactionDate: ""
        },
        balance: "R$ 0,00"
    });

    const {signOut, user} = useAuth();

    function getLastTransaction( collection : DataListProps[]
                               , type: "income" | "outcome") : string{
        const typeTransactions = collection.filter(item => item.type === type);

        const maxTransaction = new Date(Math.max.apply(Math, typeTransactions.map( item => new Date(item.date).getTime())))
                                ;
        return `Última ${type === 'income' ? 'entrada' : 'saida'} dia ${maxTransaction.getDate()} de ${maxTransaction.toLocaleString("pt-BR", {month: "long"})}`;
    }

    async function loadTransactions(){
        const data = await AsyncStorage.getItem(dataKey);
        const currentData = data ? JSON.parse(data) : [];
        
        let sumIncome = 0;
        let sumOutcome = 0;

        const formattedData : DataListProps[] = currentData
                                                    .map((item : DataListProps) => {

                                                        if(item.type === "income"){
                                                            sumIncome += Number(item.amount);
                                                        }else{
                                                            sumOutcome += Number(item.amount);
                                                        }

                                                        return {
                                                            id: item.id,
                                                            name: item.name,
                                                            type: item.type,
                                                            amount: Number(item.amount).toLocaleString('pt-BR', { style: 'currency' , currency: 'BRL'}),
                                                            date: Intl.DateTimeFormat('pt-BR', {
                                                                day: '2-digit',
                                                                month: '2-digit',
                                                                year: 'numeric'
                                                            }).format(new Date(item.date)),
                                                            categoryKey: item.categoryKey
                                                        }
                                                    });
        const balanceAmount = sumIncome - sumOutcome;
        const resumeData : ResumeData = {
            totalIncome: {
                amount: sumIncome.toLocaleString('pt-BR', { style: 'currency'
                                                          , currency: 'BRL'}
                                                ),
                lastTransactionDate: getLastTransaction(currentData, "income")
            },
            totalOutcome: {
                amount: sumOutcome.toLocaleString('pt-BR', { style: 'currency'
                                                          , currency: 'BRL'}
                                                ),
                lastTransactionDate: getLastTransaction(currentData, "outcome")
            },
            balance: balanceAmount.toLocaleString('pt-BR', { style: 'currency'
            , currency: 'BRL'}
  )
        }

        setResumeData(resumeData);
        setData(formattedData);

        setLoading(false);
    }

    useEffect( () => {
        loadTransactions()
    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, []));

    return (
        <Container>
            
            {
                isLoading ?
                <LoadIndicator />
                :
                <>
                    <Header>
                        <UserContainer>
                            <UserInfo>
                                <UserAvatar 
                                    source={{ uri: user.photo}} />
                                <User>
                                    <UserGreeting>Olá,</UserGreeting>
                                    <UserName>{user.name}</UserName>
                                </User>
                            </UserInfo>
                            <LogoutButton onPress={signOut}>
                                <Icon name="log-out"/>
                            </LogoutButton>
                        </UserContainer>
        
                        <CardsContainer>
                            <Card 
                                type="income"
                                title="Total de Entradas"
                                amount={resumeData.totalIncome.amount}
                                lastTransaction={resumeData.totalIncome.lastTransactionDate}
                            />    
                            <Card 
                                type="outcome"
                                title="Total de Saídas"
                                amount={resumeData.totalOutcome.amount}
                                lastTransaction={resumeData.totalOutcome.lastTransactionDate}
                            />
                        </CardsContainer>
                        <BalanceCard 
                            transactionTime="De 01 a 13 de Abril"
                            amount={resumeData.balance}
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
                </>
            }
            </Container>
    )
}
