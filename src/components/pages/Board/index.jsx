import React from "react";
import { Link } from "react-router-dom";
import CreateButton from "../../atoms/CreateButton";
import CreateColumnButton from "../../atoms/CreateColumnButton";
import CreateUserButton from "../../atoms/CreateUserButton";
import TaskList from "../../molecules/TaskList";
import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ history }) => {
  return (
    <div className="wrap">
      <div className="board">
        <h2>Board</h2>
        <Link to="/new_column">
          <CreateColumnButton className="button2" value={"create-column"} />
        </Link>
        <Link to="/new_user">
          <CreateUserButton className="user_button" value={"create_user"} />
        </Link>
        <Link to="/new">
          <CreateButton className="button" value={"create"} />
        </Link>
      </div>
      <div className="wrap">
        <TaskList history={history} />
      </div>
    </div>
  );
};

export default Board;

Board.propTypes = {
  history: PropTypes.object.isRequired,
};
