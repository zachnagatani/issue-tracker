import React from 'react';

export default function Form(props) {
    return (
        <form id={props.id} action={props.action} method={props.method} style={{ display: 'none' }}>
            { props.children }
        </form>
    );
}