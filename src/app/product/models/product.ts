import { Category } from '../enums/category';

interface ProductModelInterface{
    name: string;
    description: string;
    price: number;
    category: Category;
    available: boolean;
    quantity: number;
}

export class ProductModel implements ProductModelInterface{
  
    constructor(
        public name:string, 
        public description: string, 
        public price:number, 
        public category:Category,
        public available: boolean,
        public quantity: number
        ) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.category = category;
            this.available = available;
            this.quantity = quantity;
    }
}
