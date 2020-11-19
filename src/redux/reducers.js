import { combineReducers } from "redux";
import listColumnReducer from "./Columns/columnReducer";
import issueReducer from "./Issues/issueReducer";
import userReducer from "./Users/userReducer";

export default combineReducers({
  issues: issueReducer,
  users: userReducer,
  listColumn: listColumnReducer,
});
