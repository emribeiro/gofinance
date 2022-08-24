import React from "react";
import { ResumeItem } from "../ResumeItem";
import { Container } from "./styles";

export function ResumeItemList(){
    return (
        <Container>
            <ResumeItem 
                categoryKey="leisure"
                amount={150.00}
            />
            <ResumeItem 
                categoryKey="food"
                amount={75.00}
            />
        </Container>

    )
}