import React, { Component } from 'react';
import { connect } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeProduct } from "../actions/index";

class CartItemQuantity extends Component {

    state = { quantity: 0 };

    onIncreaseQuantity() {
        this.setState(prevState => {
            this.props.increaseQuantity(this.props.product.id);
            return { quantity: prevState['quantity'] ? prevState['quantity'] + 1 : 1 }
        });
    }
    onDecreaseQuantity() {
        this.setState(prevState => {
            this.props.decreaseQuantity(this.props.product.id);
            return { quantity: prevState['quantity'] ? prevState['quantity'] - 1 : 0 }
        });
    }
    onRemoveProduct() {
        this.setState(() => {
            this.props.removeProduct(this.props.product.id);
            return { quantity: 0 }
        });
    }

    render() {
        return (
            <div className="cartItemQuantity">
                <button className="btn btn-secondary btn-xs" onClick={this.onDecreaseQuantity.bind(this)}>-</button>
                <span>{this.state.quantity}</span>
                <button className="btn btn-secondary btn-xs" onClick={this.onIncreaseQuantity.bind(this)}>+</button>
                <p><button className="btn btn-link" onClick={this.onRemoveProduct.bind(this)}>remove</button></p>
            </div>
        );
    }
}

export default connect(
    ({ products }) => ({ products }),
    { increaseQuantity, decreaseQuantity, removeProduct }
)(CartItemQuantity);
