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

export interface TransactionItemData{
    title: string;
    amount: string;
    type: 'income' | 'outcome';
    category: Category;
    date: string;
}

interface TransactionItemProps{
    data: TransactionItemData;
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
                    <Amount type={data.type}>
                        {data.type === 'outcome' && '- '}    
                        {data.amount}
                    </Amount>
                </TransactionContent>
                <CategoryContent>
                    <CategoryName>{data.category.name}</CategoryName>
                    <Date>{data.date}</Date>
                </CategoryContent>
            </Content>
        </Container>
    );
}