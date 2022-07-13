import React from "react";
import { Card } from "../../Components/Card";
import { Container
       , Header
       , UserAvatar
       , User
       , UserGreeting
       , UserInfo
       , UserName, 
       UserContainer,
       Icon} from "./styles";

export function Home(){
    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <UserAvatar 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/18245701?s=40&v=4'}} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Eric</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="log-out"/>
                </UserContainer>
                <Card />
            </Header>
        </Container>
    )
}
