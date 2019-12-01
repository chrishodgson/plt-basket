import React from 'react';
import renderer from 'react-test-renderer';
describe('App Component Test Suite', () => {
    it('Should render properly to DOM', () => {
        const wrapper = renderer.create();
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});