import React, { Component } from 'react';

import ColourFilter from './ColourFilter';
import ProductListing from './ProductListing';
import CartTotal from './CartTotal';

export default class App extends Component {
  render() {
    return (
        <div>
            <ColourFilter/>
            <ProductListing/>
            <CartTotal/>
        </div>
    );
  }
}