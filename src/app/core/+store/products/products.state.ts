import { ProductModel } from "../../../products/models/product.model";
import { FeedBackModel } from "../../../products/models/feedback.model";
import { Category } from "../../../products/enums/categoty.enum";
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState extends EntityState<ProductModel> {
    // data: ReadonlyArray<ProductModel>;
    // selectedProduct: Readonly<ProductModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
  }
 
export const productAdapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();  

export const initialProductsState: ProductsState  = productAdapter.getInitialState({
    // data: [
    //     // new ProductModel(
    //     //     1, 'Ball', 'Official NBA Street Basketball, Size 6 (28.5")',
    //     //     10, Category.BestSeller, true, 5, new Date(2019, 1, 28),
    //     //     [ new FeedBackModel(1, 1, 'good'), new FeedBackModel(2, 1, 'I like it') ]),
    //     // new ProductModel(
    //     //     2, 'pen', 'Genuine Cross brand pens',
    //     //     2, Category.New, true, 15, new Date(2019, 2, 22),
    //     //     [ new FeedBackModel(3, 2, 'nice'), new FeedBackModel(4, 2, 'I love it') ]),
    //     // new ProductModel(
    //     //     3, 'sneakers', 'The super-comfortable Energy Afterburn Sneaker',
    //     //     6, Category.Popular, true, 20, new Date(2019, 3, 5),
    //     //     [ new FeedBackModel(5, 3, 'soft'), new FeedBackModel(5, 6, 'I will buy it next time') ])
    // ],
    // selectedProduct: null,
    loading: false,
    loaded: false,
    error: null
});