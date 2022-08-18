import { RectButtonProps } from "react-native-gesture-handler";
import { Icon, Title, Container } from "./styles";

interface Props extends RectButtonProps{
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