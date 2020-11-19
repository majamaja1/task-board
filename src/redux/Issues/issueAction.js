import ACTIONS from "../../constants/ACTIONS";

const addIssueToList = (newIssue) => {
  return {
    type: ACTIONS.ADD_ISSUE_TO_LIST,
    issue: newIssue,
  };
};
const editIssue = (editState) => {
  return {
    type: ACTIONS.EDIT_ISSUE,
    editIssue: editState,
  };
};
const deleteIssue = (id) => {
  return {
    type: ACTIONS.DELETE_ISSUE,
    deletedIssueId: id,
  };
};
export { addIssueToList, editIssue, deleteIssue };
