import React, {useState, useEffect} from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { VictoryPie } from "victory-native";
import { CategoryResumeData, getCategoryResumeExpenses } from "../../api/transactions";
import { ResumeItemList } from "../../Components/ResumeItemList";
import { useTheme } from "styled-components";

import {
    ChartContainer,
    Container,
    Header,
    Title,
    Content,
    MonthSelectButton,
    MonthSelectContainer,
    MonthSelectIcon,
    Month
} from "./styles";

export function Resume(){

    const [resume, setResume] = useState<CategoryResumeData[]>([]);
    const theme = useTheme();

    async function loadData(){
        const response = await getCategoryResumeExpenses();
        console.log(response);
        setResume(response);
    }

     useEffect(() => {
        loadData();
    }, [])

    return (

        <Container>
            <Header>
                <Title>
                    Gastos por Categoria
                </Title>
            </Header>
            
            <Content>

                <MonthSelectContainer>
                    <MonthSelectButton>
                        <MonthSelectIcon name="chevron-left" />
                    </MonthSelectButton>

                    <Month>Maio, 2022</Month>

                    <MonthSelectButton>
                        <MonthSelectIcon name="chevron-right" />
                    </MonthSelectButton>
                </MonthSelectContainer>

                <ChartContainer>
                    <VictoryPie
                        data={resume}
                        colorScale={resume.map(category => category.color)}
                        labelRadius={50}
                        style={{
                            labels: {
                                fontSize: RFValue(16),
                                fontWeight: 'bold',
                                fontFamily: theme.fonts.bold,
                                fill: theme.colors.shape
                            }
                        }}
                        x="percent"
                        y="amount"
                    />
                </ChartContainer>
            
                <ResumeItemList 
                    data={resume}
                />
            </Content>
        </Container>
    );
}