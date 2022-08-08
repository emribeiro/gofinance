import React from "react";
import { Button } from "../../Components/Form/Button";
import { Input } from "../../Components/Form/Input";
import { Container, Form, Header, InputGroup, Title } from "./styles";

export function Registro(){
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <InputGroup>
                    <Input
                        placeholder="Nome" />
                    <Input
                        placeholder="Preço" />
                </InputGroup>

                <Button title="Enviar" />
            </Form>
        </Container>
    )
}