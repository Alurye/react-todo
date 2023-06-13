import React from 'react';
import '../styles/TaskList.css'; // Import the CSS file for TaskList component

const TaskList = ({ tasks, deleteTask, markTaskCompleted }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span>{task.title}</span>
          <div className="task-buttons">
            <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
            {!task.completed && (
              <button className="complete-button" onClick={() => markTaskCompleted(task.id)}>Complete</button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
