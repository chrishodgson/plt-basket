import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

class ColourFilter extends Component {

    getColours() {
        const colours = [];
        for (let product of this.props.products) {
            if (!colours.includes(product['colour'])) {
                colours.push(product['colour']);
            }
        }
        return colours;
    }

    renderFields() {
        return (
                <option value="all">-- Choose a colour --</option>
                {this.getColours().map(colour => <option key={colour} value={colour}>{colour}</option>)}
            </Field>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                {this.renderFields()}
            </form>
        );
    }
}

export default reduxForm({
    form: "colourFilter"
})(
    connect( ({ products }) => ({ products }) )(ColourFilter)
);
