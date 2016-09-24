import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// import component
import Miss from './Miss';

// Shallow render the component
it('renders without crashing', () => {
  shallow(<Miss />);
});