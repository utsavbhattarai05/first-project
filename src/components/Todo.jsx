import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
  const[inputData, setInputData]=useState('')
  const[todos, setTodos]=useState([
    'Walk for fresh',
    'Rest a while.',
    'feed a dog.',
    'Watch a movie.'
  ])
  console.log(inputData);

  // arrow function can also be used 
  // const handleSubmit= =>{}


  // const handelSubmit=()=>{}
  function handleSubmit(){
    setTodos([...todos, inputData]);
    setInputData('');

  }
  function removeall(){
    setTodos([]);
  }

  function deleteTodo(index){
    const newTodos =([...todos])
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  // function updateTodo(index){

  // }



  return (
    <div class="container">
        <h3 class="app-logo">Todo App</h3><br></br>


        <input
         type="text" 
         class="enter"
         placeholder='Enter'
         value={inputData}
         onChange={(e) => setInputData(e.target.value)}
         
         ></input>



        <button class ="add"
        onClick={handleSubmit}
        disabled={!inputData}
        >Add Todo</button>


        <h3 class="dot"><u>Todo List</u></h3>


        <ul class="list">

          
            {todos.map ((todo) => (
              <li>{todo} 
             <button 
             
             >
              edit
              </button>
             <button
             className='deleteclass'
             onClick={() => deleteTodo(todos.indexOf(todo))}>
              delete</button></li>
              
            ))}

        </ul>
        <button class="remove"

        onClick={removeall}
        >Remove A/C</button>
    </div>

  )
            }
 export default Todo
            