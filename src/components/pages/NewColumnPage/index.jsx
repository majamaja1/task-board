import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../atoms/Input";
import Validator from "validatorjs";
import CreateColumnButton from "../../atoms/CreateColumnButton";
import { addListColumn } from "../../../redux/Columns/columnAction";
import PropTypes from "prop-types";

const NewColumnPage = ({ history }) => {
  const [state, setState] = useState({
    title: "",
  });
  const [errors, setErrors] = useState({});

  const changeState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const onTitleChange = (e) => {
    changeState({ title: e.target.value });
  };

  const isValid = () => {
    let rules = {
      title: "required",
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

  const onColumnCreate = () => {
    if (isValid()) {
      dispatch(addListColumn(state));
      history.goBack();
    }
  };

  return (
    <div>
      <div className="Title">
        <Input
          title={"Title: "}
          value={state.title}
          onChange={onTitleChange}
          error={errors.title}
        />
      </div>

      <div>
        <CreateColumnButton onClick={onColumnCreate} value="submit" />
      </div>
    </div>
  );
};

export default NewColumnPage;

NewColumnPage.propTypes = {
  history: PropTypes.object.isRequired,
};
