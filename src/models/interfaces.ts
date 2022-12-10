import { Types } from "mongoose";

interface DocumentResult<T> {
  _doc: T;
  _id: Types.ObjectId;
  user: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInterface extends DocumentResult<UserInterface> {
  firstname: string;
  lastname: string;
  othernames?: string;
  email: string;
  password: string;
  profilePic: string;
}

export interface BudgetInterface extends DocumentResult<BudgetInterface> {
  title: string;
  total: number;
  balance: number;
  description?: string;
  status: string;
  items: {
    title: string;
    description: string;
    category: Types.ObjectId;
    amount: number;
    balance: number;
    _id: Types.ObjectId;
  }[];
  time: Date;
  modelType: string;
  completed: boolean;
}

export interface CategoryInterface extends DocumentResult<CategoryInterface> {
  title: string;
  categoryType: string;
  description?: string;
}

export interface InflowInterface extends DocumentResult<InflowInterface> {
  title: string;
  amount: number;
  category: Types.ObjectId;
  description: string;
  receiptImage: string[];
  time: Date;
  modelType: string;
}

export interface OutflowInterface extends DocumentResult<OutflowInterface> {
  title: string;
  amount: number;
  category: Types.ObjectId;
  budget: Types.ObjectId;
  item: Types.ObjectId;
  description: string;
  receiptImage: string[];
  time: Date;
  modelType: string;
}

export interface SavingsInterface extends DocumentResult<SavingsInterface> {
  amount: number;
  time: Date;
  modelType: string;
}
