export interface Ingredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  _id: string;
  type: "bun" | "main" | "sauce";
  uuid?: any;
  id?: any
}

export interface Order {
  name: string;
  number: number;
  createdAt: string;
  _id: string;
  ingredients: string[];
  status: string;
}

export const baseUrl = "https://norma.nomoreparties.space/api";

export const socketUrl = "wss://norma.nomoreparties.space/orders/all";
