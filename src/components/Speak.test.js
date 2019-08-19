import React from 'react';
import renderer from 'react-test-renderer';
import Speak from './Speak'
import {render, fireEvent} from '@testing-library/react';

describe('<Speak />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Speak />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  // What we want to test: 
    // when user clicks button, what happens in the app?
  it("displays a message when 'speak' button is clicked", () => {
      const speak = jest.fn();
      let messageMock = '';

      const {getByText} = render(<Speak speak={messageMock} />);
      //console.log(component);
      //alternatively: const button = getByText('Speak');
      const button = getByText(/speak/i);
      //console.log(button);
      fireEvent.click(getByText(button));
      //alternative to lines 19 and 22: fireEvent.click(getByText(/speak/i));
      expect(speak).toHaveBeenCalled();
  });
});

