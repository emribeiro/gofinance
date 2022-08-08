import React from "react";
import { Input } from "../../Components/Form/Input";
import { Container, Form, Header, Title } from "./styles";

export function Registro(){
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Input
                    placeholder="Nome" />
                <Input
                    placeholder="Preço" />
            </Form>
        </Container>
    )
}