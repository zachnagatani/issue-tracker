import React from 'react';
import { Route } from 'react-router-dom';

import Issues from '../Issues/Issues';
import SingleIssue from '../SingleIssue/SingleIssue';

export default function Main(props) {
    return (
        <main>
            <Route exact path="/issues" component={Issues} />
            <Route path="/issues/:id" component={SingleIssue} />
        </main>
    );
};
