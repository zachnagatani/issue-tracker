import React from 'react';
import ReactDOM from 'react-dom';
import Issues from './Issues';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Issues />, div);
});
