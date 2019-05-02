import { productAdapter, initialProductsState, ProductsState } from "./products.state";
import { ProductsActions, ProductsActionTypes } from "./products.actions";
import { ProductModel } from "../../../products/models/product.model";


export function productsReducer(
  state = initialProductsState,
  action: ProductsActions
): ProductsState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case ProductsActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const products = [...<Array<ProductModel>>action.payload];

      return productAdapter.addAll(products, {...state, loading: false, loaded: true});
    }


    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      const task = { ...<ProductModel>action.payload };

      return productAdapter.addOne(task, state);
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const product = { ...<ProductModel>action.payload };

      return productAdapter.updateOne({
          id: product.id,
          changes: product
      }, state);
    }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      const product = { ...<ProductModel>action.payload };

      return productAdapter.removeOne(product.id, state);
    }

    case ProductsActionTypes.CREATE_PRODUCT_ERROR:
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
    case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    default: {
      return state;
    }
  }
} 


// export function productsReducer( 
// state = initialProductsState, 
// action: ProductsActions 
// ): ProductsState {
//   console.log(`Reducer: Action came in! ${action.type}`);

//   switch (action.type) {
//     // case ProductsActionTypes.SWITCH_PRODUCT_AVAILABLITY: {
//     //       console.log('SWITCH_PRODUCT_AVAILABLITY action being handled!');

//     //       const id = (<ProductModel>action.payload).id;
//     //       const data = state.data.map(product => {
//     //         if (product.id === id) {
//     //           return {...action.payload, available: !product.available};
//     //         }

//     //         return product;
//     //       });
          
//     //       return {
//     //         ...state,
//     //         data
//     //       };
//     // }

//     case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
//             console.log('CREATE_PRODUCT_SUCCESS action being handled!');
//             const product = { ...<ProductModel>action.payload };
//             const data = [...state.data, product];

//             return {
//               ...state,
//               data
//             };
//       }

//       case ProductsActionTypes.CREATE_PRODUCT_ERROR: {
//             console.log('CREATE_PRODUCT_ERROR action being handled!');
//             const error = action.payload;
//             return {
//               ...state,
//               error
//             };
//       }

//     case ProductsActionTypes.GET_PRODUCTS: {
//       console.log('GET_PRODUCTS action being handled!');
//       // return {...state};
//       return {
//         ...state,
//         loading: true
//       };
//     }

//     case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
//       console.log('GET_PRODUCTS_SUCCESS action being handled!');
//       const data = [...<Array<ProductModel>>action.payload];
//       return {
//         ...state,
//         data, 
//         loading: false, 
//         loaded: true,
//         // selectedProduct: null
//       };
//     }

//   case ProductsActionTypes.GET_PRODUCTS_ERROR: {
//       console.log('GET_PRODUCTS_ERROR action being handled!');
//       const error = action.payload;
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//         error
//       };
//     }

//     // case ProductsActionTypes.GET_PRODUCT: {
//     //   console.log('GET_PRODUCT action being handled!');
//     //   return {
//     //     ...state,
//     //     loading: true
//     //   };
//     // }

//     // case ProductsActionTypes.GET_PRODUCT_SUCCESS: {
//     //   console.log('GET_PRODUCT_SUCCESS action being handled!');
//     //   const selectedProduct = { ...<ProductModel>action.payload };
//     //   return {
//     //     ...state,
//     //     loading: false, 
//     //     loaded: true, 
//     //     selectedProduct
//     //   };
//     // }

//     // case ProductsActionTypes.GET_PRODUCT_ERROR: {
//     //   console.log('GET_PRODUCT_ERROR action being handled!');
//     //   const error = action.payload;
//     //   return {
//     //     ...state,
//     //     loading: false, 
//     //     loaded: false,
//     //     error
//     //   };
//     // }

//     case ProductsActionTypes.CREATE_PRODUCT: {
//       console.log('CREATE_PRODUCT action being handled!');
//       return {...state};
//     }

//     case ProductsActionTypes.UPDATE_PRODUCT: {
//       console.log('UPDATE_PRODUCT action being handled!');
//       return {...state};
//     }

//     case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
//       console.log('UPDATE_PRODUCT_SUCCESS action being handled!');
//       const product = { ...<ProductModel>action.payload };
//       const data = [...state.data];
//       const index = data.findIndex(t => t.id === product.id);

//       data[index] = product;

//       return {
//         ...state,
//         data
//       };
//     }

//     case ProductsActionTypes.UPDATE_PRODUCT_ERROR: {
//           console.log('UPDATE_PRODUCT_ERROR action being handled!');
//           const error = action.payload;
//           return {
//             ...state,
//             error
//           };
//     }

//     case ProductsActionTypes.DELETE_PRODUCT: {
//       console.log('DELETE_PRODUCT action being handled!');
//       return {...state};
//     }

//     case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
//       console.log('DELETE_PRODUCT_SUCCESS action being handled!');
//       const product = { ...<ProductModel>action.payload };
//       const data = state.data.filter(t => t.id !== product.id);

//       return {
//         ...state,
//         data
//       };
//     }

//     case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
//           console.log('DELETE_PRODUCT_ERROR action being handled!');
//           const error = action.payload;
//           return {
//             ...state,
//             error
//           };
//     } 

//     default: {
//       console.log('UNKNOWN_PRODUCT action being handled!');
//       return state;
//     }
//   }
// }

