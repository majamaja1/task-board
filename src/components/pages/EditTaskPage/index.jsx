import React, { useState } from 'react';
import Validator from 'validatorjs';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import enums from '../../../constants/enum';
import DropDown from '../../atoms/DropDown';
import EditButton from '../../atoms/EditButton';
import Input from '../../atoms/Input';
import { editIssue } from '../../../redux/actions';

const EditTaskPage = ({ history, match }) => {
  const { id } = match.params;

  const issue = useSelector((state) => state.issues.allIssues[id]);
  const users = useSelector((state) => state.users.allUsers);
  const columns = useSelector((state) => state.listColumn.allListColumns);

  const [editState, setEditState] = useState(issue);

  const changeState = (newState) => {
    setEditState((prevState) => {
      return { ...prevState, ...newState };
    });
  };

  const [errors, setErrors] = useState({});
  const issueTypeClick = (pojedini) => {
    changeState({ issueType: pojedini });
  };

  const assigneeClick = (pojedini) => {
    changeState({ assignee: pojedini });
  };

  const priorityClick = (pojedini) => {
    changeState({ priority: pojedini });
  };
  const listColumnClick = (pojedini) => {
    changeState({ listColumn: pojedini });
  };

  const reporterClick = (pojedini) => {
    changeState({ reporter: pojedini });
  };

  const onTitleChange = (e) => {
    changeState({ title: e.target.value });
  };

  const onDetailsChange = (e) => {
    changeState({ details: e.target.value });
  };

  const isValid = () => {
    const rules = {
      title: 'required',
      details: 'required',
      issueType: 'required',
      priority: 'required',
      assignee: 'required',
      listColumn: 'required',
      reporter: 'required',
    };

    const validation = new Validator(editState, rules);

    if (validation.fails()) {
      setErrors(validation.errors.errors);
      return false;
    }
    setErrors({});
    return true;
  };

  const dispatch = useDispatch();
  const onTaskEdit = () => {
    if (isValid()) {
      dispatch(editIssue(editState));
      history.goBack();
    }
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <div className="NewTask">
        <div className="Title">
          <Input
            title="Title: "
            value={editState.title}
            onChange={onTitleChange}
            error={errors.title}
          />
        </div>
        <div>
          <Input
            title="Details: "
            value={editState.details}
            onChange={onDetailsChange}
            error={errors.details}
          />
        </div>
        <div className="DropDown">
          <DropDown
            title="Issue type: "
            onSelect={issueTypeClick}
            items={enums.issueType}
            value={editState.issueType}
            error={errors.issueType}
          />
        </div>
        <div className="DropDown">
          <DropDown
            title="Priority: "
            onSelect={priorityClick}
            items={enums.priority}
            value={editState.priority}
            error={errors.priority}
          />
        </div>
        <div className="DropDown">
          <DropDown
            title="Assignee: "
            onSelect={assigneeClick}
            items={users}
            value={editState.assignee}
            error={errors.assignee}
          />
        </div>
        <div className="DropDown">
          <DropDown
            title="List column: "
            onSelect={listColumnClick}
            items={columns}
            value={editState.listColumn}
            error={errors.listColumn}
          />
        </div>
        <div className="DropDown">
          <DropDown
            title="Reporter: "
            onSelect={reporterClick}
            items={users}
            value={editState.reporter}
            error={errors.reporter}
          />
        </div>
      </div>

      <EditButton onClick={onTaskEdit} value="submit" />
    </div>
  );
};

export default EditTaskPage;

EditTaskPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};
