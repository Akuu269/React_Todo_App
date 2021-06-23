// rcc and hit Enter
import React, { Component } from 'react'
import TaskList from './TaskList'
import InputContainer from './InputConatainer'
//1 . In render >- static ui define
// 2 . identify different variables that can change 
// throughtout the life time -> state
// 3. rewrite render using those state variables
// 4. event listener to change the state

export default class Todo extends Component {
    // create a task array 
    state = {
        //taskList: ["task-1" , "task-2" , "task-3" , "task-4"],
        taskList : []  
       // currTask = ""
    }
    // delete current task which we click
    deleteTask = (id) => {
        let filteredtasks = this.state.taskList
        .filter(function(task){
            //return task !== cTask;
            return task.id !== id;
        })
        // except the task which we click to delete remaining all task put in task list
        this.setState({
            taskList:filteredtasks
        })
    }
    // handleCurrTask = (e) => {
    //     let currValue = e.target.value;
    //     this.setState({
    //         currTask:currValue
    //     })
    // }

    // when we use Arrow fun we not need to bind the fun
    addTask = (currTask) => {
        //let currTask = this.state.currTask;   // give the refrence
        //     let tempArr = this.state.taskList;
        //     for(let i = 0 ; i < this.state.taskList.length ; i++){
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(currTask);
        // shortcut method To writing above commented code
        let tempArr = [...this.state.taskList , 
        {task : currTask , id : this.state.taskList.length}]  // ...this >- tells the input typing
        this.setState({
            taskList:tempArr
           // currTask: ""
        })
    }
   
    // after performing above step then remaing task go to print in render function
    render() {
        return (
            <div>
                {/*passing props to children component */}

                <InputContainer addTask = {this.addTask}></InputContainer>
                <TaskList taskList = {this.state.taskList}
                deleteTask = {this.deleteTask}
                ></TaskList>
            </div>
        )
    }

}
