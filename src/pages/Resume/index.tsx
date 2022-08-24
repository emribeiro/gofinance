import React from "react";
import { ResumeItemList } from "../../Components/ResumeItemList";

import {
    Container,
    Header,
    Title
} from "./styles";

export function Resume(){
    return (

        <Container>
            <Header>
                <Title>
                    Gastos por Categoria
                </Title>
            </Header>
        
            <ResumeItemList />
        </Container>
    );
}