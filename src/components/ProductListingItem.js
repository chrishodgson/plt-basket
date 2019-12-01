import React from 'react';
import { create } from "react-test-renderer";
import { productListingItem } from '../../src/components/ProductListingItem'

export default ( {product: {img, name, price}} ) => {
    return (
        <div className="productListingItem">
            <img src={img} alt={name} />
            <div className="productListingItemText">
                <div>{name}</div>
                <div>&pound;{price.toFixed(2)}</div>
            </div>
        </div>
    );
};
