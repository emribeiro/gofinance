import { TouchableOpacityProps } from "react-native";
import { Icon, Title, Container } from "./styles";

interface Props extends TouchableOpacityProps{
    title: string;
}

export function CategorySelectButton({title, ...rest}: Props){
    return (
        <Container {...rest}>
            <Title>{title}</Title>
            <Icon name="chevron-down"></Icon>
        </Container>
    )
}