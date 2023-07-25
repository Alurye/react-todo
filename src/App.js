
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const markTaskCompleted = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React to do app
        </p>

      </header>

      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          markTaskCompleted={markTaskCompleted}
        />
      </div>
    </div>
  );

}

export default App;
