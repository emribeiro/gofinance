import AsyncStorage from "@react-native-async-storage/async-storage";
import { categories } from "../utils/categories";

interface TransactionData{
    id: string;
    name: string;
    amount: string;
    type: 'income' | 'outcome';
    categoryKey: string;
    date: string;
}

export interface CategoryResumeData{
    categoryKey: string;
    amount: number;
    percent: string;
    color: string;
}

const dataKey = '@gofinance:transactions';

export async function getTransactions():Promise<TransactionData[]>{
    const data = await AsyncStorage.getItem(dataKey);
    const currentData:TransactionData[] = data ? JSON.parse(data) : [];

    return currentData;
}

export async function getCategoryResumeExpenses(): Promise<CategoryResumeData[]>{
    const transactions = await getTransactions();
    const expenses = transactions.filter((item) => item.type === 'outcome');
    const totalExpenses = expenses.reduce((accr, expense) => accr + Number(expense.amount), 0);
    const resumeCategoryData: CategoryResumeData[] = [];
    categories.forEach((category) => {
        const amount = expenses.filter((item) => item.categoryKey === category.key).reduce((accr, current) => accr = accr + Number(current.amount), 0);
        const percent = `${((amount / totalExpenses) * 100).toFixed(1)}%`
        if(amount > 0){
            resumeCategoryData.push({
                categoryKey: category.key,
                amount,
                color: category.color,
                percent
            });
        }
    });

    return resumeCategoryData;
}