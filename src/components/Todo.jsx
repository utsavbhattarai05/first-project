import React from 'react'
import './Todo.css'

export const Todo = () => {
  return (
    <div class="container">
        <h3 class="app-logo">Todo App</h3><br></br>
        <input type="text" class="enter" placeholder='Enter' ></input>
        <button class ="add">Add Todo</button>
        <h3 class="dot"><u>Todo List</u></h3>
        <ul class="list">
            <li >Hello </li>
            <li>Task 1</li>
            <li>Task 2</li>
        </ul>
        <button class="remove">Remove A/C</button>
    </div>
  )
}
 export default Todo