import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import UsersContext from '../../../context/userContext';
import { removeListColumn } from '../../../redux/Columns/columnAction';
import DeleteColumnButton from '../../atoms/DeleteColumnButton';
import './TaskList.css';
import Task from '../../atoms/Task';

const TaskList = ({ history }) => {
  const dispatch = useDispatch();
  const deleteListColumn = (id) => {
    dispatch(removeListColumn(id));
  };
  const globalState = useContext(UsersContext);

  const { deleteItem } = globalState;
  const { editState } = globalState;
  const issues = useSelector((state) => state.issues.allIssues);
  const columns = useSelector((state) => state.listColumn.allListColumns);

  return (
    <div>
      <div className="all-lists">
        {columns.map((list) => {
          return (
            <div className="task-container">
              <div className="naslov">
                <h2>
                  {list.name}
                  <div>
                    <DeleteColumnButton
                      onClick={() => {
                        deleteListColumn(list.value);
                      }}
                    />
                  </div>
                </h2>
              </div>
              <div className="svi-taskovi-jedne-liste">
                {issues
                  .filter((issue) => list.value === issue.listColumn.value)
                  .map((filteredValue) => (
                    <Task
                      title={filteredValue.title}
                      image={filteredValue.assignee.avatarImg}
                      details={filteredValue.details}
                      issueType={filteredValue.issueType.name}
                      priority={filteredValue.priority.name}
                      assignee={filteredValue.assignee.name}
                      listColumn={filteredValue.listColumn.name}
                      reporter={filteredValue.reporter.name}
                      index={filteredValue.id}
                      deleteItem={deleteItem}
                      editState={editState}
                      history={history}
                    />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
