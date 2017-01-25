import React from 'react';
import ReactDOM from 'react-dom';
import TablePagSortSearchUI from './TablePagSortSearchUI';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TablePagSortSearchUI />, div);
});