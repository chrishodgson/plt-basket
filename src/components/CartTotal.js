import React, { Component } from 'react';
import { connect } from "react-redux";
import { productColourSelector } from '../selectors/index'

class CartTotal extends Component {

    getCartTotal() {
        let total = 0;
        for (let product of productColourSelector(this.props.colour, this.props.products)) {
            const quantity = product['quantity'] || 0;
            if (quantity) {
                total += quantity * product['price'];
            }
        }
        return total.toFixed(2);
    }

    render() {
        return (
            <h3 className="cartTotal">
                &pound;{this.getCartTotal()}
            </h3>
        );
    }
}

function mapStateToProps({ form, products }) {
    const colour = form.colourFilter && form.colourFilter.values && form.colourFilter.values.colour || '';
    return { colour, products };
}

export default connect(mapStateToProps)(CartTotal);
