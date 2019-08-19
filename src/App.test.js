import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import asyncFunc from './App';
import App from './App';
import {render, fireEvent} from '@testing-library/react'; 

describe('<App />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('asyncFunc', () => {
  it('eventually resolves to success', () => {
    const resolvedValue = null;
    const expected = 'Success!';
    asyncFunc().then(res => {
      resolvedValue = res;
      expect(resolvedValue).toEqual(expected);
    });
  });
});

/*
alternatively: 
describe('asyncFunc', () => {
  it('eventually resolves to success', () => {
    let resolvedValue = null;
    const expected = 'Success!';
    App.asyncFunc().then(res => {
      resolvedValue = res;
      expect(resolvedValue).toEqual(expected);
    })
  })
})
*/

describe('speak', () => {
  it("Should pass 'bark' into Speak", () => {
    const {getByText, queryByText} = render(<App />);
    fireEvent.click(getByText(/speak/i));
    expect(queryByText(/bark/i)).toBeTruthy();
  });
});