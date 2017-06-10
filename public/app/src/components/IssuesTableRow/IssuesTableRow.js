import React from 'react';
import { Link } from 'react-router-dom';

export default function IssuesTableRow(props) {
    const status = props.status ? <td><Link to="/issues/2">Open</Link></td> : <td>Closed</td>;

    return (
        <tr className="issue">
            <td>{props.customerName}</td>
            <td>{props.customerEmail}</td>
            <td className="table-description">{props.description}</td>
            {status}
            <td>{props.openedDate}</td>
            <td>{props.status ? 'N/A' : props.closedDate}</td>
        </tr>
    );
};
