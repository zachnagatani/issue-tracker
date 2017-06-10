import React from 'react';
import ReactDOM from 'react-dom';
import IssuesTableRow from './IssuesTableRow';

it('renders without crashing', () => {
  const tbody = document.createElement('tbody');
  ReactDOM.render(<IssuesTableRow />, tbody);
});
