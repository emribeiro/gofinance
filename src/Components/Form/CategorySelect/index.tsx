import { Icon, Title, Container } from "./styles";

interface Props{
    title: string;
}

export function CategorySelect({title}: Props){
    return (
        <Container>
            <Title>{title}</Title>
            <Icon name="chevron-down"></Icon>
        </Container>
    )
}