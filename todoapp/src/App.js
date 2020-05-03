import React,{useReducer} from 'react';
//useReducer is responsible to pass the action and state to perform any task
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { todoContext } from "./Context/todoContext"
import todoReducer from "./Context/reducer"
import TodoForm from "./Components/TodoForm"
import Todo from "./Components/Todo"

const App = () => {
  //instead of set method we are gonna use dispatch for reducer
  const [todos, dispatch] = useReducer(todoReducer, [])
  return(
    <todoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>TODO APP WITH CONTEXT API</h1>
        <Todo />
        <TodoForm />
      </Container>
    </todoContext.Provider>
  );
}


export default App;
