import React from 'react';
import { connect } from 'react-redux';

import IssuesTable from '../IssuesTable/IssuesTable';

const mapStateToProps = state => {
    return {
        issues: state.issues
    };
};

const Issues = connect(
    mapStateToProps
)(IssuesTable);

export default Issues;