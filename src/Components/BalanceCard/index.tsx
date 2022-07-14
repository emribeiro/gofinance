import React from "react"

import {
     Container
   , InfoContainer
   , Icon
   , DescriptionContainer
   , Title
   , TransactionTime
   , Amount
} from "./styles";

interface BalanceCardProps{
    transactionTime: string;
    amount: string;
}

export function BalanceCard({transactionTime, amount} : BalanceCardProps){
    return (
        <Container>
            <InfoContainer>
                <Icon name="dollar-sign"/>
                <DescriptionContainer>
                    <Title>Balanço</Title>
                    <TransactionTime>{transactionTime}</TransactionTime>
                </DescriptionContainer>
            </InfoContainer>
            <Amount>{amount}</Amount>
        </Container>
    )
}