import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    return (
        <nav className="sidebar float-left">
            <ul className="sidebar__nav menu vertical">
                <li className="sidebar__brand menu-text">Issue Tracker</li>
                <li className="sidebar__link">
                    <Link to="/issues">Issue Data</Link>
                </li>
                <li className="sidebar__link">
                    <a href="/logout">Logout</a>
                </li>
            </ul>
        </nav>
    );
};
