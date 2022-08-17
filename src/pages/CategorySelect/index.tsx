import { FlatList } from "react-native";
import { Category, Container
       , Footer, Header
       , Icon, Name, Separator, Title } from "./styles";

import { categories } from "../../utils/categories";
import { Button } from "../../Components/Form/Button";

export function CategorySelect(){
    return (
        <Container>
            <Header>
                <Title>Categorias</Title>
            </Header>

            <FlatList
                data={categories}
                style={{flex: 1, width: "100%"}}
                keyExtractor={item => item.key}
                renderItem={({item}) => (
                    <Category>
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
            <Footer>
                <Button title="Selecionar" />
            </Footer>
        </Container>

    );
}