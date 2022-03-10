import { Product } from "./productModel";

export interface Response{
  result: string;
  data:Product[]; 
}