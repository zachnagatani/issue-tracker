import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleIssue(props) {
    const issue = {
                "id": "5",
                "type": "issue",
                "attributes": {
                    "customerName": "Sargent Guichard",
                    "customerEmail": "byurevich0@cnn.com",
                    "description": "sapiendsfdsfsdivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
                    "status": true,
                    "openedAt": "01/02/2017",
                    "closedAt": "01/04/2017",
                    "handling-employee": "Zach Nagatani"
                }
            };

    return (
        <div className="issue-container">
            <div className="card text-center">
                <div className="card-divider">
                    <h1>Issue {issue.id}</h1>
                </div>
                <div className="card-section">
                    <p>Submitted by: {issue.attributes.customerName}</p>
                    <p>Email: {issue.attributes.customerEmail}</p>
                    <p>Status: Open</p>
                    <p>Opened On: {issue.attributes.openedAt}</p>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, animi, omnis magni error in id nulla illum nisi iure, enim debitis voluptates doloremque neque deserunt quasi expedita accusantium! Cupiditate, dolor.</p>

                    <div className="expanded button-group">
                        <button type="button" className="primary button">Close Issue</button>
                        <Link to="/issues" type="button" className="secondary button">Back to Issues</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
