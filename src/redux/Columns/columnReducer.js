import ACTIONS from "../../constants/ACTIONS";

const initialState = {
  allListColumns: [
    {
      name: "ToDo",
      createdAt: "",
      itemCount: "",
      value: 0,
    },
    {
      name: "In Progress",
      createdAt: "",
      itemCount: "",
      value: 1,
    },
    {
      name: "In Review",
      createdAt: "",
      itemCount: "",
      value: 2,
    },
    {
      name: "Done",
      createdAt: "",
      itemCount: "",
      value: 3,
    },
  ],
};

export default function listColumnReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_LISTCOLUMN_TO_LIST:
      return {
        ...state,
        allListColumns: [
          ...state.allListColumns,
          {
            name: action.listColumn.title,
            value: state.allListColumns.length,
          },
        ],
      };

    case ACTIONS.REMOVE_LISTCOLUMN:
      const index = action.removedColumnId;
      const newArr = [...state.allListColumns];
      newArr.splice(index, 1);

      const newArray = newArr.map((elem, i) => {
        if (i >= index) {
          return {
            ...elem,
            value: elem.value - 1,
          };
        }
        return elem;
      });

      return {
        ...state,
        allListColumns: newArray,
      };

    default:
      return state;
  }
}
