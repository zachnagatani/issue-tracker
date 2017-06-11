import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import App from './App';

it('renders without crashing', () => {
  ReactTestUtils.createRenderer().render(<App />);
});
