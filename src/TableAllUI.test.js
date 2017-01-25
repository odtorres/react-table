import React from 'react';
import ReactDOM from 'react-dom';
import TableAllUI from './TableAllUI';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableAllUI />, div);
});