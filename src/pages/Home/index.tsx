import React from "react";

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
    const data : DataListProps[]= [{
        id: "1a02-1b03-1c04",
        title: "Desenvolvimento de Site",
        type: "income",
        amount: "R$ 12.000,00",
        date: "27/07/2022",
        category: {
            icon: "dollar-sign",
            name: "Vendas"
        }
    },
    {
        id: "1a02-1b03-1c05",
        title: "Hamburgueria Pizzy",
        type: "outcome",
        amount: "R$ 59,00",
        date: "10/07/2022",
        category: {
            icon: "coffee",
            name: "Alimentação"
        }
    },
    {
        id: "1a02-1b03-1c06",
        title: "Aluguel do Mês",
        type: "outcome",
        amount: "R$ 1.929,00",
        date: "20/07/2022",
        category: {
            icon: "home",
            name: "Moradia"
        }
    }
];

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
