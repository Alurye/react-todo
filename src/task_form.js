import React from 'react';



class TaskForm extends React.Component {

    state = {
        task: {
            taskName:"",
            dueDate: "",
            completed: false,
        }
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            task:{...this.state.task,
            [e.target.name]: e.target.value}
        })
    }

handleCheckBox = (e) => {
   
    this.setState({
        task: {...this.state.task,
            [e.target.name]: !this.state.task.completed
        }
    })
}

    handleSubmit = (e) => {
  e.preventDefault();
    this.props.taskSubmit(e, this.state.task);
}


    render(){
        console.log(this.state.task) 
        return(
            <div>
                <h2>Add Task:</h2>
              
                <form onSubmit={(e)=> this.handleSubmit(e)} >
                    <div>
                        <label htmlFor="Add Task:">Task name:</label>
                        <input onChange={this.handleChange} type="text" name="taskName" value={this.state.task.taskName} />
                    </div>
                    <div>
                        <label htmlFor="dueDate">Due date:</label>
                        <input onChange={this.handleChange} type="text" name="dueDate" value={this.state.task.dueDate} />
                    </div>
                  
                    <div>
                        <label htmlFor="completed">Completed:</label>
                        <input  onChange={this.handleCheckBox} type="checkbox" defaultChecked={this.state.task.completed}  name="completed"  />
                    </div>
                  
                 
                    <button>add task</button>
                </form>
            </div>
        )
    }

}


export default TaskForm;