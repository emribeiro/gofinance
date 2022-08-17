import React, {useState} from "react";
import { Button } from "../../Components/Form/Button";
import { CategorySelect } from "../../Components/Form/CategorySelect";
import { Input } from "../../Components/Form/Input";
import { TransactionTypeButton } from "../../Components/Form/TransactionTypeButton";
import { Container, Form, Header, InputGroup, Title, TransactionTypeGroup } from "./styles";



export function Registro(){
    const [transactionTypeSelected, setTransactionTypeSelected] = useState('');

    function handleTransactionTypeSelection(type: string){
        console.log("entrei")
        setTransactionTypeSelected(type);
    }

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

                    <TransactionTypeGroup>
                        <TransactionTypeButton 
                            title="Entrada"
                            type="income"
                            isActive={transactionTypeSelected === 'income'}
                            onPress={() => handleTransactionTypeSelection('income')}
                        />
                        <TransactionTypeButton 
                            title="Saída"
                            type="outcome"
                            isActive={transactionTypeSelected === 'outcome'}
                            onPress={() => handleTransactionTypeSelection('outcome')}
                        />
                    </TransactionTypeGroup>
                    <CategorySelect title="Categoria" />
                </InputGroup>


                <Button title="Enviar" />
            </Form>
        </Container>
    )
}