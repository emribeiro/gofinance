import React from "react";
import { BalanceCard } from "../../Components/BalanceCard";
import { Card } from "../../Components/Card";
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
    } from "./styles";

export function Home(){
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
                    <Icon name="log-out"/>
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
        </Container>
    )
}
