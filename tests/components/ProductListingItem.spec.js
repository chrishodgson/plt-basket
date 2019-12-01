import React from "react";
import { create } from "react-test-renderer";
import ProductListingItem from '../../src/components/ProductListingItem'

describe("ProductListingItem component", () => {
    test("ProductListingItem matches the snapshot", () => {
        const product = { img: 'image url', name: 'trousers', price: 9 };
        const component = create(<ProductListingItem product={product} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});