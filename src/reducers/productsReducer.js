import { FETCH_PRODUCTS, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_PRODUCT } from "../actions/types";

export default function(state = [], action) {
  let productId = '';

  switch (action.type) {
    case FETCH_PRODUCTS:
        return action.payload.data;

    case INCREASE_QUANTITY:
        productId = action.payload || null;
        return state.map(product => {
            if (product.id !== productId) {
                return product;
            }
            product['quantity'] = product['quantity'] ? product['quantity'] + 1 : 1;
            return product;
        });

    case DECREASE_QUANTITY:
        productId = action.payload || null;
        return state.map(product => {
            if (product.id !== productId) {
                return product;
            }
            product['quantity'] = product['quantity'] ? product['quantity'] - 1 : 0;
            return product;
        });

    case REMOVE_PRODUCT:
        productId = action.payload || null;
        return state.filter(product => {
            return product.id !== productId;
        });

    default:
      return state;
  }
}