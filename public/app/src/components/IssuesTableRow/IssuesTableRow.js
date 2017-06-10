import React from 'react';
import { Link } from 'react-router-dom';

export default function IssuesTableRow(props) {
    const status = props.status === 'open' ? <td><Link to="/issues/2">{props.status}</Link></td> : <td>{props.status}</td>;

    return (
        <tr className="issue">
            <td>{props.customerName}</td>
            <td>{props.customerEmail}</td>
            <td className="table-description">{props.description}</td>
            {status}
            <td>{props.openedDate}</td>
            <td>{props.closedDate}</td>
        </tr>
    );
};
