import React from "react";
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
            </Header>
        </Container>
    )
}
