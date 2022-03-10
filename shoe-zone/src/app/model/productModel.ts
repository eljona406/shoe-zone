import { Price } from "./priceModel";

export interface Product{
    [x: string]: any;
    id: number;
    SKU : string;
    name: string;
    brandName: string;
    mainImage: string;
    price: Price;
    sizes: any[];
    stockStatus: string;
    colour: string;
    description: string;
}