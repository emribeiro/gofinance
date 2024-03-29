import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { LoadContainer } from "./styles";



export function LoadIndicator(){

    const theme = useTheme();

    return (
        <LoadContainer>
            <ActivityIndicator 
                color={theme.colors.primary}
                size="large"    
                />
        </LoadContainer>
        
    )
}