import React from "react";
import { create } from "react-test-renderer";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ColourFilter } from "../../src/components/ColourFilter";

jest.mock('redux-form/lib/Field', () => 'field');

Enzyme.configure({ adapter: new Adapter() });

describe("ColourFilter component", () => {

    const products = [ {colour:'red'}, {colour:'yellow'}, {colour:'red'} ];

    const shallowSetup = () => {
        const props = { handleSubmit: jest.fn(), products };

        const enzymeWrapper = shallow(<ColourFilter {...props} />);

        return { props, enzymeWrapper };
    };

    test("Matches the snapshot", () => {
        const tree = create(<ColourFilter products={products}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should fire handleSubmit', () => {
        const { props, enzymeWrapper } = shallowSetup(),
            form = enzymeWrapper.find('form').first();
        form.simulate('submit');
        expect(props.handleSubmit.mock.calls.length).toBe(1);
    });

    it('should render correct colour options', () => {
        const { enzymeWrapper } = shallowSetup(),
            options = enzymeWrapper.find('option');

        expect(options.length).toBe(3);
        expect(options.first().prop('value')).toBe('all');
        expect(options.at(1).prop('value')).toBe('red');
        expect(options.last().prop('value')).toBe('yellow');
    });
});
