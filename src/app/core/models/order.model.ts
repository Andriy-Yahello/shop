import { ProductModel } from "../../products/models/product.model";

interface OrderModelInterface{
    id: number;
    productList: Array<ProductModel>;
}

export class OrderModel implements OrderModelInterface{
    constructor(
        public id: number = null,
        public productList: Array<ProductModel> = []
        ) {
            this.id = id,
            this.productList = productList
        }
}