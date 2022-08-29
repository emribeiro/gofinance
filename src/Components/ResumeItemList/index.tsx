import React from "react";
import { FlatList } from "react-native";
import { CategoryResumeData } from "../../api/transactions";
import { ResumeItem } from "../ResumeItem";
import { Container } from "./styles";

interface ResumeItemListProps{
    data: CategoryResumeData[];
}

export function ResumeItemList({data} :ResumeItemListProps){

    return (
        <Container>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.categoryKey}
                renderItem={({item}) => <ResumeItem categoryKey={item.categoryKey} amount={item.amount} />}
            />
        </Container>

    )
}