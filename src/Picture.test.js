import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// import component
import Picture from './Picture';

it('renders without crashing', () => {
  shallow(<Picture />);
});
