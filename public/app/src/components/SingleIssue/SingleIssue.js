import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form';

export default class SingleIssue extends React.Component {
    componentDidMount() {
        this.props.fetchSingleIssue(this.props.match.params.id);
        this.closeIssue = this.closeIssue.bind(this);
    }

    closeIssue(id) {
        document.getElementById('token-input-close').value = window.Laravel;
        document.getElementById('close-issue-form').submit();
    }

    render() {
        // This is here to make sure componentDidMount runs. For some reason this isn't needed in IssuesTable?
        if (!this.props.issue) return <h1>'Loading'</h1>;

        return (
            <div className="issue-container">
                <div className="card text-center">
                    <div className="card-divider">
                        <h1>Issue {this.props.issue.id}</h1>
                    </div>
                    <div className="card-section">
                        <p>Submitted by: {this.props.issue.attributes.customerName}</p>
                        <p>Email: {this.props.issue.attributes.customerEmail}</p>
                        <p>Status: Open</p>
                        <p>Opened On: {this.props.issue.attributes.openedAt}</p>
                        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, animi, omnis magni error in id nulla illum nisi iure, enim debitis voluptates doloremque neque deserunt quasi expedita accusantium! Cupiditate, dolor.</p>

                        <div className="expanded button-group">
                            <button type="button" className="primary button" onClick={() => this.closeIssue(this.props.issue.id)}>Close Issue</button>
                            <Form id="close-issue-form" action={`/api/issues/close/${this.props.match.params.id}`} method="POST">
                                <input type="hidden" id="token-input-close" name="_token" />
                            </Form>

                            <Link to="/issues" type="button" className="secondary button">Back to Issues</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
