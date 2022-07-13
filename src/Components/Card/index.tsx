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

export function Card(){
    return (
        <Container>
            <Content>
                <Icon name="arrow-up-circle" />
                <Title>Total de Entradas</Title>
                <Amount>R$ 17.400,00</Amount>
            </Content>
            <Footer>
                <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
            </Footer>
        </Container>
    );
}