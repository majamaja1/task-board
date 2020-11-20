import ACTIONS from '../../constants/ACTIONS';

const addListColumn = (columnState) => {
  return {
    type: ACTIONS.ADD_LISTCOLUMN_TO_LIST,
    listColumn: columnState,
  };
};

const removeListColumn = (id) => {
  return {
    type: ACTIONS.REMOVE_LISTCOLUMN,
    removedColumnId: id,
  };
};

export { addListColumn, removeListColumn };
