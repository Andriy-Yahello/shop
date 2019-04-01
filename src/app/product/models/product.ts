import { Category } from '../enums/category';

interface ProductModelInterface{
    name: string;
    description: string;
    price: number;
    category: Category;
}

export class ProductModel implements ProductModelInterface{
    constructor(
        public name:string, 
        public description: string, 
        public price:number, 
        public category:Category
        ) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.category = category;
    }
}
