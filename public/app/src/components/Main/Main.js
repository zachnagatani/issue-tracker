import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Issues from '../Issues/Issues';
import SingleIssueContainer from '../SingleIssueContainer/SingleIssueContainer';

export default function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/issues" component={Issues} />
                <Route exact path="/issues/:id" component={SingleIssueContainer} />
                <Redirect from="" to="/issues" />
            </Switch>
        </main>
    );
};
