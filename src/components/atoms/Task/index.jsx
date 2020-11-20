import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteIssue } from '../../../redux/actions';
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';
import './Task.css';

const Task = ({
  title,
  details,
  issueType,
  priority,
  assignee,
  reporter,
  image,
  index,
  history,
}) => {
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(deleteIssue(index));
  };

  const editTask = () => {
    history.push(`/edit/${index}`);
  };
  return (
    <div className="task">
      <p>
        title:
        {title}
      </p>
      <p>
        details:
        {details}
      </p>
      <div className="pic-wrap">
        <p>
          assignee:
          {assignee}
        </p>
        <img className="slika" src={image} alt="slika" />
      </div>
      <p>
        reporter:
        {reporter}
      </p>
      <p className="type">
        type:
        {issueType === 'task' ? (
          <p className="issue1">{issueType}</p>
        ) : (
          <p className="issue2">{issueType}</p>
        )}
      </p>
      <p>
        priority:
        {priority}
      </p>
      <p>
        priority:
        {priority}
      </p>
      <EditButton onClick={editTask} />
      <DeleteButton onClick={deleteTask} />
    </div>
  );
};

export default Task;

Task.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  issueType: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired,
  reporter: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
