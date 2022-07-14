import React from "react";

import {
     Container
   , Icon
   , Title
   , Content
   , Amount
   , Footer
   , LastTransaction
} from './styles'
interface CardProps{
    type: "income" | "outcome";
    title: string;
    amount: string;
    lastTransaction: string;
}

const icon = {
    "income" : "arrow-up-circle",
    "outcome": "arrow-down-circle"
}

export function Card({type, title, amount, lastTransaction}: CardProps){
    return (
        <Container>
            <Content>
                <Icon name={icon[type]} type={type}/>
                <Title>{title}</Title>
                <Amount>{amount}</Amount>
            </Content>
            <Footer>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    );
}