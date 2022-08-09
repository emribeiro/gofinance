
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";


interface TransactionTypeButtonProps extends TouchableOpacityProps{
    title: string;
    type: "income" | "outcome";
    isActive: boolean
}

const icon = {
    "income" : "arrow-up-circle",
    "outcome": "arrow-down-circle"
}

export function TransactionTypeButton({title, type, isActive, ...rest}: TransactionTypeButtonProps){

    return (
        <Container {...rest} type={type} isActive={isActive}>
            <Icon name={icon[type]} type={type} />
            <Title>
                {title}
            </Title>
        </Container>
    )
}