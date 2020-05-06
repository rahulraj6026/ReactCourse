import React, { useState, useEffect } from 'react'
import Todo from './Components/Todo'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import TodoForm from './Components/TodoForm'



const App = () => {
  const [todos, settodos] = useState([])

  useEffect( () => {
    const localtodo = localStorage.getItem("todos")
    if(localtodo){
      settodos(JSON.parse(localtodo))
    }
  }, [])//trigger a method before an event

  const addTodos = async todo => {
    settodos([...todos, todo])
  }

  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])//pass the todos as dependency

  const markComplete = id  => {
    settodos(todos.filter( (todo) => {
      console.log(todo.id +" "+ id)
      return todo.id !== id
    }))
  }

  return(
    <Container fluid>
      <h1> TODO USING LOCAL STORAGE </h1>
      <Todo todos={todos} markComplete={markComplete}/>
      <TodoForm addTodos={addTodos}/>
    </Container>
  )
}
export default App