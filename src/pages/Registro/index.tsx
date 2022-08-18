import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-native";
import { Button } from "../../Components/Form/Button";
import { CategorySelectButton } from "../../Components/Form/CategorySelectButton";
import { InputForm } from "../../Components/Form/InputForm";
import { TransactionTypeButton } from "../../Components/Form/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";
import { Container, Form, Header, InputGroup, Title, TransactionTypeGroup } from "./styles";

interface FormData{
    name: string;
    amount: string;
}


export function Registro(){
    const [transactionTypeSelected, setTransactionTypeSelected] = useState('');
    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const {control, handleSubmit} = useForm();

    const [category, setCategory] = useState({
        name: "Categoria",
        key: "category"
    });

    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            type: transactionTypeSelected,
            category: category.key
        }

        console.log(data);
    }

    function handleTransactionTypeSelection(type: string){
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
                    <InputForm
                        control={control}
                        name="name"
                        placeholder="Nome" />
                    <InputForm
                        control={control}
                        name="amount"
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


                <Button 
                    title="Enviar"
                    onPress={handleSubmit(handleRegister)}
                 />
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