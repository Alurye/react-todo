const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate input fields here if needed before adding the task
      // For simplicity, we assume the input is always valid in this example
      addTask({ taskName, dueDate, isCompleted });
      setTaskName('');
      setDueDate('');
      setIsCompleted(false);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Completion Status:</label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    );
  };
  
  export default TaskForm;
  