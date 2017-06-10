import React from 'react';
import ReactDOM from 'react-dom';
import IssuesTableRow from './IssuesTableRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssuesTableRow />, div);
});
