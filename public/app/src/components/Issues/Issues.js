import { connect } from 'react-redux';

import { fetchIssues } from '../../actions/actions';

import IssuesTable from '../IssuesTable/IssuesTable';

const mapStateToProps = state => {
    return {
        issues: state.issues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchIssues: () => {
            dispatch(fetchIssues())
        }
    }
};

const Issues = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssuesTable);

export default Issues;