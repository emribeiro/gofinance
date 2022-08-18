import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Alert, Modal } from "react-native";
import { Button } from "../../Components/Form/Button";
import { CategorySelectButton } from "../../Components/Form/CategorySelectButton";
import { InputForm } from "../../Components/Form/InputForm";
import { TransactionTypeButton } from "../../Components/Form/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";
import { Container, Form, Header, InputGroup, Title, TransactionTypeGroup } from "./styles";

import * as Yup from 'yup';
import {yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FormData{
    name: string;
    amount: string;
}

const formSchema = Yup.object({
    name: Yup.string().required("O nome é obrigatório"),
    amount: Yup
        .number()
        .typeError("Formato de Valor inválido")
        .positive("O valor deve ser positivo")
        .required("O valor é obrigatório!"),
});

export function Registro(){
    const [transactionTypeSelected, setTransactionTypeSelected] = useState('');
    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    });
    const dataKey = '@gofinance:transactions';

    const [category, setCategory] = useState({
        name: "Categoria",
        key: "category"
    });

    async function handleRegister(form: FormData){
        if(!transactionTypeSelected){
            return Alert.alert("Tipo da Transação é obrigatório!");
        }

        if(category.key === 'category'){
            return Alert.alert("Categoria da Transação é obrigatória!");
        }

        const data = {
            name: form.name,
            amount: form.amount,
            type: transactionTypeSelected,
            category: category.key
        }

        try{
            await AsyncStorage.setItem(dataKey, JSON.stringify(data));
        }catch(e){
            Alert.alert("Erro na gravação dos dados!")
        }
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
                        errors={errors.name && errors.name.message}
                        placeholder="Nome" />
                    <InputForm
                        control={control}
                        name="amount"
                        errors={errors.amount && errors.amount.message}
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