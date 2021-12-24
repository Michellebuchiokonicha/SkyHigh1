import React from 'react';
import ReactDoM, { unmountComponentAtNode } from 'react-dom';
import Products from './Products';
import { isTSAnyKeyword } from '@babel/types';

import { render, cleanup } from '@testing-library/react';
import "jest-dom/extend-expect";

import renderer from "react-test-render"

afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDoM.render(<Products></Products>, div)
    // ReactDoM,unmountComponentAtNode(div);
});

it("renders Products correctly", () =>{
 const {getByTestId} = render(<Products label="click me please"></Products>)
expect( getByTestId('products')).toHaveTextContent("click me please");
});

// snapshot testing
it("matches snapshot", () => {
    renderer.createRenderer(<Products label="save"></Products>).toJSON();
    expect(tree).toMatchSnapshot();
})

