import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Validator from 'validatorjs';
import CreateUserButton from '../../atoms/CreateUserButton';
import Input from '../../atoms/Input';
import { addUserToList, removeUser } from '../../../redux/Users/userAction';
import DeleteColumnButton from '../../atoms/DeleteColumnButton';

const NewUserPage = () => {
  const [state, setState] = useState({
    name: '',
  });

  const [errors, setErrors] = useState({});
  const users = useSelector((userState) => userState.users.allUsers);

  const changeState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const onNameChange = (e) => {
    changeState({ name: e.target.value });
  };

  const isValid = () => {
    const rules = {
      name: 'required',
    };

    const validation = new Validator(state, rules);

    if (validation.fails()) {
      setErrors(validation.errors.errors);
      return false;
    }
    setErrors({});
    return true;
  };

  const dispatch = useDispatch();

  const onUserCreate = () => {
    if (isValid()) {
      dispatch(addUserToList(state));

      setState({ name: '' });
    }
  };

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <div className="Name">
        <Input
          title="Name: "
          value={state.name}
          onChange={onNameChange}
          error={errors.name}
        />
      </div>

      <div>
        <CreateUserButton onClick={onUserCreate} value="submit" />
      </div>
      <div>
        {users.map((user) => {
          return (
            <ul className="users">
              <li>
                {user.name}
                <DeleteColumnButton
                  onClick={() => {
                    deleteUser(user.value);
                  }}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default NewUserPage;
