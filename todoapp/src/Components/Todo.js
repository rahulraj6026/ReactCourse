import React, { useContext } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { FaCheckDouble } from 'react-icons/fa'
import {todoContext} from "../Context/todoContext"
import { REMOVE_TODO } from "../Context/action.types"

const Todo = () => {
    const {todos, dispatch} = useContext(todoContext)
    return(
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => {
                return(
                    //id to loop for a unique todo
                    <ListGroupItem key={todo.id}>
                        {todo.todoString}
                        <span className="float-right"
                            onClick={
                                () => {
                                    dispatch({
                                        type: REMOVE_TODO,
                                        payload: todo.id
                                    })
                                }
                            }
                        >
                            <FaCheckDouble />
                        </span>
                    </ListGroupItem>
                )
            })}
        </ListGroup>
    )
}

export default Todo