import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Issues from '../Issues/Issues';

export default function Main(props) {
    return (
        <Route path="/issues" component={Issues} />
    );
};
