import React from "react";
import { categories } from "../../utils/categories";

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
    name: string;
    amount: string;
    type: 'income' | 'outcome';
    categoryKey: string;
    date: string;
}

interface TransactionItemProps{
    data: TransactionItemData;
}

export function TransactionItem({data}: TransactionItemProps){
    const [category] = categories.filter( (item) => item.key === data.categoryKey);

    return (
        <Container>
            <IconContainer>
                <Icon name={category.icon} />
            </IconContainer>
            <Content>
                <TransactionContent>
                    <Title>{data.name}</Title>
                    <Amount type={data.type}>
                        {data.type === 'outcome' && '- '}    
                        {data.amount}
                    </Amount>
                </TransactionContent>
                <CategoryContent>
                    <CategoryName>{category.name}</CategoryName>
                    <Date>{data.date}</Date>
                </CategoryContent>
            </Content>
        </Container>
    );
}