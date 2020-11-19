import ACTIONS from "../../constants/ACTIONS";

const addUserToList = (newUser) => {
  return {
    type: ACTIONS.ADD_USER_TO_LIST,
    user: newUser,
  };
};

const removeUser = (id) => {
  return {
    type: ACTIONS.REMOVE_USER,
    userId: id,
  };
};

export { addUserToList, removeUser };
