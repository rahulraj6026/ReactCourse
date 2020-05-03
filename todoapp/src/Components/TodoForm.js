import React, {useState, useContext} from 'react'
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';
import {todoContext} from "../Context/todoContext"
import {ADD_TODO} from "../Context/action.types"

const TodoForm  = () => {
    const [todoString, settodoString] = useState("")
    const {dispatch} = useContext(todoContext)

    //add a todo when we click on handlesubmit
    const handleSubmit = e => {
        e.preventDefault()
        if(todoString === ""){
            alert("test")
            // toast.info("Please Enter a Todo !", {
            //     position: toast.POSITION.BOTTOM_CENTER
            // });
        }
        else{
            //create a todo with the string entered and a unique id
            const todo = {
                todoString,
                id: uuidv4()
            }

            //the dispatch which is needed to be passed
            //It has type which is the action to be performed
            //and has a payload which consists of information ie todo
            dispatch({
                type: ADD_TODO,
                payload: todo
            })

            //set the updated string
            settodoString()
            }
    }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input 
                        type="text" 
                        name="todo" 
                        id="todo" 
                        placeholder="Your next todo"
                        value={todoString}
                        onChange = {
                            e => settodoString(e.target.value)
                        }
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button 
                        color="success"
                        >
                        ADD
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

//we need useContext to handle dispatch to help handle type and payload
//to store it temporarily we use useState

export default TodoForm
