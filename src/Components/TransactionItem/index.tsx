import React from "react";

import {
    Amount,
    CategoryContent,
    CategoryName,
    Container,
    Content, 
    Date, 
    Icon, 
    IconContainer, 
    Title, 
    TransactionContent
} from "./styles"

interface Category{
    name: string;
    icon: string;
}

interface Data{
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface TransactionItemProps{
    data: Data;
}

export function TransactionItem({data}: TransactionItemProps){
    return (
        <Container>
            <IconContainer>
                <Icon name={data.category.icon} />
            </IconContainer>
            <Content>
                <TransactionContent>
                    <Title>{data.title}</Title>
                    <Amount>{data.amount}</Amount>
                </TransactionContent>
                <CategoryContent>
                    <CategoryName>{data.category.name}</CategoryName>
                    <Date>{data.date}</Date>
                </CategoryContent>
            </Content>
        </Container>
    );
}