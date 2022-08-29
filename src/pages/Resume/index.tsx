import React, {useState, useEffect} from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { VictoryPie } from "victory-native";
import { CategoryResumeData, getCategoryResumeExpensesPerMonth } from "../../api/transactions";
import { ResumeItemList } from "../../Components/ResumeItemList";
import { useTheme } from "styled-components";

import { addMonths, subMonths, format } from "date-fns";
import {ptBR} from "date-fns/locale";

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
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const theme = useTheme();

    function handleMonthSelectButton(action : "next" | "prev"){
        if(action === 'next'){
            setSelectedDate(addMonths(selectedDate,1));
        }else{
            setSelectedDate(subMonths(selectedDate,1));
        }
    }

    async function loadData(){
        const response = await getCategoryResumeExpensesPerMonth(selectedDate);
        setResume(response);
    } 

     useEffect(() => {
        loadData();
    }, [selectedDate])

    return (

        <Container>
            <Header>
                <Title>
                    Gastos por Categoria
                </Title>
            </Header>
            
            <Content>

                <MonthSelectContainer>
                    <MonthSelectButton onPress={() => handleMonthSelectButton("prev")}>
                        <MonthSelectIcon name="chevron-left" />
                    </MonthSelectButton>

                    <Month>
                        {format(selectedDate, 'MMMM, yyyy', {locale: ptBR})}
                    </Month>

                    <MonthSelectButton onPress={() => handleMonthSelectButton("next")}>
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