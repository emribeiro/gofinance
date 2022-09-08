import { FlatList } from "react-native";
import { Category, Container
       , Footer, Header
       , Icon, Name, Separator, Title } from "./styles";

import { categories } from "../../utils/categories";
import { Button } from "../../Components/Form/Button";

interface Category{
    key: string;
    name: string;
}

interface Props{
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectedCategory: () => void;
}

export function CategorySelect({category, setCategory, closeSelectedCategory}: Props){

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
                    <Category
                        isActive= {category.key === item.key} 
                        onPress={() => setCategory(item)}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
            <Footer>
                <Button title="Selecionar" 
                    onPress={closeSelectedCategory}
                />
            </Footer>
        </Container>

    );
}