import React from 'react';
import { Link } from 'react-router-dom';

import IssuesTableRow from '../IssuesTableRow/IssuesTableRow';

export default function IssuesTable(props) {
    const rows = props.issues.map(issue => {
        return <IssuesTableRow
                    key={issue.id}
                    id={issue.id}
                    customerName={issue.attributes.customerName}
                    customerEmail={issue.attributes.customerEmail}
                    description={issue.attributes.description}
                    status={issue.attributes.status}
                    openedDate={issue.attributes.openedAt}
                    closedDate={issue.attributes.closedAt}
                />
    });

    return (
        <div className="table-container">
            <table className="issues issues--table stack">
                <thead>
                    <tr>
                        <td className="issue-heading button">Customer</td>
                        <td className="issue-heading button">Customer's Email</td>
                        <td className="issue-heading button">Description</td>
                        <td className="issue-heading button">Status</td>
                        <td className="issue-heading button">Open Date</td>
                        <td className="issue-heading button">Close Date</td>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        </div>
    );
};
