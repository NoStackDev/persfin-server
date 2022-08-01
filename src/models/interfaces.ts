import { Types } from "mongoose";

interface DocumentResult<T> {
    _doc: T;
    _id: Types.ObjectId;
    id?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface BalanceInterface extends DocumentResult<BalanceInterface> {
    amount: number
}

export interface BudgetInterface extends DocumentResult<BudgetInterface> {
    title: string;
    total: number;
    recurring?: {isRecurring: boolean, recurEvery: Date};
    description?: string;
}

export interface ExpenseCategoryInterface extends DocumentResult<ExpenseCategoryInterface>{
    title: string;
    description?: string
}

export interface ExpenseInterface extends DocumentResult<ExpenseInterface> {
    amount: number;
    category: Types.ObjectId;
    budget: Types.ObjectId;
    description?: string;
    recurring?: {isRecurring: boolean, recurEvery?: Date};
    receiptImage?: string
}

export interface IncomeCategoryInterface extends DocumentResult<IncomeCategoryInterface> {
    title: string;
    description?: string
}

export interface IncomeInterface extends DocumentResult<IncomeInterface> {
    amount: number;
    category: Types.ObjectId;
    time?: Date
    recurring?: {isRecurring: boolean, recurEvery: Date};
    description: string
}

export interface SavingInterface extends DocumentResult<SavingInterface> {
    amount: number
}