import React from 'react';
import ReactDOM from 'react-dom';
import SingleIssue from './SingleIssue';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleIssue />, div);
});
