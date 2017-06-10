import React from 'react';
import { Link } from 'react-router-dom';

export default class SingleIssue extends React.Component {
    componentDidMount() {
        this.props.fetchSingleIssue(this.props.match.params.id);
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
                            <button type="button" className="primary button">Close Issue</button>
                            <Link to="/issues" type="button" className="secondary button">Back to Issues</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
