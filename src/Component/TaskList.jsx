import React, { Component } from 'react'

export default class TaskList extends Component {
    render() {
        return (
            <div className = "task-list">
            <ul>
                {this.props.taskList.map((taskobj) => {
                    return(
                        <li className = "tasklist" key = {taskobj.id}>
                            <p>{taskobj.task}</p>
                            <button onClick = {() => {this.props.deleteTask(taskobj.id)}}>Delete</button>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}
