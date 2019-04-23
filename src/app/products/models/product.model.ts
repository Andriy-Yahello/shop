import { Category } from '../enums/categoty.enum';
import { FeedBackModel } from './feedback.model';

interface ProductModelInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    available: boolean;
    quantity: number;
    updated: Date;
    feedbackList: FeedBackModel[];
}

export class ProductModel implements ProductModelInterface {

    constructor(
        public id: number = null,
        public name: string = '',
        public description: string= '',
        public price: number = 0,
        public category: Category = Category.BestSeller,
        public available: boolean = false,
        public quantity: number = 0,
        public updated: Date = new Date(),
        public feedbackList: FeedBackModel[] = []
        ) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.category = category;
            this.available = available;
            this.quantity = quantity;
            this.updated = updated;
            this.feedbackList = feedbackList;
        }
}
