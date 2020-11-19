import React, { useState } from "react";
import enums from "../../../constants/enum";
import CreateButton from "../../atoms/CreateButton";
import DropDown from "../../atoms/DropDown";
import Input from "../../atoms/Input";
import "./NewTaskPage.css";
import Validator from "validatorjs";
import { useDispatch, useSelector } from "react-redux";
import { addIssueToList } from "../../../redux/actions";
import PropTypes from "prop-types";

const NewTaskPage = ({ history }) => {
  const [state, setState] = useState({
    redirect: false,
    title: "",
    details: "",
    issueType: undefined,
    priority: undefined,
    assignee: undefined,
    listColumn: undefined,
    reporter: undefined,
  });

  const [errors, setErrors] = useState({});

  const changeState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const issueTypeClick = (pojedini) => {
    changeState({ issueType: pojedini });
  };

  const priorityClick = (pojedini) => {
    changeState({ priority: pojedini });
  };

  const assigneeClick = (pojedini) => {
    changeState({ assignee: pojedini });
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
    let rules = {
      title: "required",
      details: "required",
      issueType: "required",
      priority: "required",
      assignee: "required",
      listColumn: "required",
      reporter: "required",
    };

    let validation = new Validator(state, rules);

    if (validation.fails()) {
      setErrors(validation.errors.errors);
      return false;
    } else {
      setErrors({});
      return true;
    }
  };

  const dispatch = useDispatch();

  const onTaskCreate = () => {
    if (isValid()) {
      dispatch(addIssueToList(state));
      history.goBack();
    }
  };

  const users = useSelector((state) => state.users.allUsers);
  const columns = useSelector((state) => state.listColumn.allListColumns);

  return (
    <div className="NewTask">
      <div className="Title">
        <Input
          title={"Title: "}
          value={state.title}
          onChange={onTitleChange}
          error={errors.title}
        />
      </div>
      <div>
        <Input
          title={"Details: "}
          value={state.details}
          onChange={onDetailsChange}
          error={errors.details}
        />
      </div>
      <div className="DropDown">
        <DropDown
          title={"Issue type: "}
          onSelect={issueTypeClick}
          items={enums.issueType}
          value={state.issueType}
          error={errors.issueType}
        />
      </div>
      <div className="DropDown">
        <DropDown
          title={"Priority: "}
          onSelect={priorityClick}
          items={enums.priority}
          value={state.priority}
          error={errors.priority}
        />
      </div>
      <div className="DropDown">
        <DropDown
          title={"Assignee: "}
          onSelect={assigneeClick}
          items={users}
          value={state.assignee}
          error={errors.assignee}
        />
      </div>
      <div className="DropDown">
        <DropDown
          title={"List column: "}
          onSelect={listColumnClick}
          items={columns}
          value={state.listColumn}
          error={errors.listColumn}
        />
      </div>
      <div className="DropDown">
        <DropDown
          title={"Reporter: "}
          onSelect={reporterClick}
          items={users}
          value={state.reporter}
          error={errors.reporter}
        />
      </div>
      <div>
        <CreateButton onClick={onTaskCreate} value="submit" />
      </div>
    </div>
  );
};

export default NewTaskPage;

NewTaskPage.propTypes = {
  history: PropTypes.object.isRequired,
};
