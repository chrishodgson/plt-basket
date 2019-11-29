import axios from "axios";

import {
    FETCH_PRODUCTS,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    REMOVE_PRODUCT
} from "./types";

export function fetchProducts() {
    const request = axios.get("https://my-json-server.typicode.com/benirvingplt/products/products");

    return {
        type: FETCH_PRODUCTS,
        payload: request
    };
}

export const increaseQuantity = productId => {
    return { type: INCREASE_QUANTITY, payload: productId };
};

export const decreaseQuantity = productId => {
    return { type: DECREASE_QUANTITY, payload: productId };
};

export const removeProduct = productId => {
    return { type: REMOVE_PRODUCT, payload: productId };
};
