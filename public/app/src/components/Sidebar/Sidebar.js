import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../Form/Form';

export default function Sidebar(props) {
    return (
        <nav className="sidebar float-left">
            <ul className="sidebar__nav menu vertical">
                <li className="sidebar__brand menu-text">Issue Tracker</li>
                <li className="sidebar__link">
                    <Link to="/issues">Issue Data</Link>
                </li>
                <li className="sidebar__link">
                    <a
                        href="/logout"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('token-input').value = window.Laravel;
                            document.getElementById('logout-form').submit();
                        }}>Logout</a>
                    <Form id="logout-form" action="/logout" method="POST" style={{ display: 'none' }}>
                        <input type="hidden" id="token-input" name="_token" />
                    </Form>
                </li>
            </ul>
        </nav>
    );
};
