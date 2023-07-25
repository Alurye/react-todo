import TaskForm from './task_form';
import TaskList from './task_list';
import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    tasklist:["buy more steak", "clean the apartment"],
    taskItem: "gas the car"
  }

  taskSubmit = (e, taskItem) => {
e.preventDefault();

this.setState({
    tasklist:[...this.state.tasklist,taskItem]
})
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
      
          <p>
             React to do app
          </p>
         
        </header>
      
        <TaskForm taskSubmit={this.taskSubmit} />
        <TaskList tasklist={this.state.tasklist} />
      </div>
    );
  }

}

export default App;
