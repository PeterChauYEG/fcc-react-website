import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// import component
import Home from './Home';

it('renders without crashing', () => {
  shallow(<Home />);
});
