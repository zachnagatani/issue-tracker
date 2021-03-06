import { connect } from 'react-redux';

import { fetchSingleIssue, closeIssueRequest } from '../../actions/actions';

import SingleIssue from '../SingleIssue/SingleIssue';

const mapStateToProps = (state, ownProps) => {
    return {
        issue: state.singleIssue
    };
};

const mapStateToDispatch = dispatch => {
    return {
        fetchSingleIssue: id => {
            dispatch(fetchSingleIssue(id))
        },
        closeIssueRequest: id => {
            dispatch(closeIssueRequest(id))
        }
    };
};

const SingleIssueContainer = connect(
    mapStateToProps,
    mapStateToDispatch
)(SingleIssue);

export default SingleIssueContainer;
