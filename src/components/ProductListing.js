import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import { productColourSelector } from '../selectors/index'

import ProductListingItem from './ProductListingItem';
import CartItemQuantity from './CartItemQuantity';

class ProductListing extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return productColourSelector(this.props.colour, this.props.products).map(product => {
            return (
                <li className="list-group-item" key={product.id}>
                    <ProductListingItem product={product} />
                    <CartItemQuantity product={product} />
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderProducts()}
            </ul>
        );
    }
}

function mapStateToProps({ form, products }) {
    const colour = form.colourFilter && form.colourFilter.values && form.colourFilter.values.colour || '';
    return { colour, products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductListing);
