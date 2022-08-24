import { categories } from "../../utils/categories";
import { Amount, Category, Container, Icon, IconContainer, Title } from "./styles";

interface ResumeItemProps{
    categoryKey: string;
    amount: number;
}

export function ResumeItem({categoryKey, amount}: ResumeItemProps){
    const [category] = categories.filter(item => item.key === categoryKey)
    return (
        <Container color={category.color}>
            <Category>
                <IconContainer>
                    <Icon name={category.icon} />
                </IconContainer>
                <Title>{category.name}</Title>  
            </Category>
            <Amount>{amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Amount>
        </Container>
    );
}