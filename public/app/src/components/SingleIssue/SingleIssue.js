import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form';

export default class SingleIssue extends React.Component {
    componentDidMount() {
        this.props.fetchSingleIssue(this.props.match.params.id);
        this.closeIssue = this.closeIssue.bind(this);
    }

    closeIssue(id) {
        this.props.closeIssueRequest(this.props.match.params.id);
    }

    render() {
        const issue = this.props.issue;
        // This is here to make sure componentDidMount runs. For some reason this isn't needed in IssuesTable?
        if (!issue) return <h1>'Loading'</h1>;

        return (
            <div className="issue-container">
                <div className="card text-center">
                    <div className="card-divider">
                        <h1>Issue {issue.id}</h1>
                    </div>
                    <div className="card-section">
                        <p>Submitted by: {issue.attributes.customerName}</p>
                        <p>Email: {issue.attributes.customerEmail}</p>
                        <p>Status: {issue.attributes.status ? 'Open' : 'Closed'}</p>
                        <p>Opened On: {issue.attributes.openedAt}</p>
                        <p className="text-left">{issue.attributes.description}</p>

                        <div className="expanded button-group">
                            <button type="button" className="primary button" onClick={() => this.closeIssue(issue.id)}>Close Issue</button>
                            <Link to="/issues" type="button" className="secondary button">Back to Issues</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
