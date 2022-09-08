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



export async function getTransactions(user_id: string):Promise<TransactionData[]>{
    const dataKey = `@gofinance:transactions_user:${user_id}`;
    const data = await AsyncStorage.getItem(dataKey);
    const currentData:TransactionData[] = data ? JSON.parse(data) : [];

    return currentData;
}

export async function getCategoryResumeExpensesPerMonth(selectedDate: Date, user_id:string): Promise<CategoryResumeData[]>{
    const transactions = await getTransactions(user_id);
    const expenses = transactions.filter(
        (item) => 
            item.type === 'outcome' &&
            new Date(item.date).getMonth() == selectedDate.getMonth() &&
            new Date(item.date).getFullYear() == selectedDate.getFullYear()
    );
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