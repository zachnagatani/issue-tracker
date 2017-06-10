import { connect } from 'react-redux';

import SingleIssue from '../SingleIssue/SingleIssue';

function getSingleIssue(issues, id) {
    return issues.filter(item => item.id === id)[0];
}

const mapStateToProps = (state, ownProps) => {
    return {
        issue: getSingleIssue(state.issues, ownProps.match.params.id)
    };
};

const SingleIssueContainer = connect(
    mapStateToProps
)(SingleIssue);

export default SingleIssueContainer;
