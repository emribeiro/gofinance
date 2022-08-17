import React, {useState} from "react";
import { Modal } from "react-native";
import { Button } from "../../Components/Form/Button";
import { CategorySelectButton } from "../../Components/Form/CategorySelectButton";
import { Input } from "../../Components/Form/Input";
import { TransactionTypeButton } from "../../Components/Form/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";
import { Container, Form, Header, InputGroup, Title, TransactionTypeGroup } from "./styles";



export function Registro(){
    const [transactionTypeSelected, setTransactionTypeSelected] = useState('');
    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const [category, setCategory] = useState({
        name: "Categoria",
        key: "category"
    });

    function handleTransactionTypeSelection(type: string){
        console.log("entrei")
        setTransactionTypeSelected(type);
    }

    function openCategoryModal(){
        setCategoryModalVisible(true);
    }

    function closeCategoryModal(){
        setCategoryModalVisible(false);
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
                    <CategorySelectButton
                         title={category.name}
                         onPress={openCategoryModal}
                     />
                </InputGroup>


                <Button title="Enviar" />
            </Form>

            <Modal visible={isCategoryModalVisible}>
                <CategorySelect 
                    closeSelectedCategory={closeCategoryModal}
                    setCategory={setCategory} 
                    category={category}
                />
            </Modal>
        </Container>
    )
}