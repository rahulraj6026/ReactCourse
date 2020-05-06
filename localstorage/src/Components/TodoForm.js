import React, {useState} from 'react'
import { FormGroup, Form, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const TodoForm = ( { addTodos }) => {
    const [todoString, settodoString] = useState("")

    const HandleSubmit = ( e ) => {
        e.preventDefault()

        if(todoString === ""){
            toast.info("Please enter a Todo!",{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        else{
            const todo = {
                todoString,
                id: uuidv4()
            }
    
            addTodos(todo)//get this method from form and pass the todo
    
            settodoString("")
        }
    }


    return(
        <Form onSubmit={HandleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter a Todo"
                        value={todoString}
                        onChange = { e =>
                            settodoString(e.target.value)
                        }
                    />
                        <InputGroupAddon addonType="prepend">
                            <Button color="success">
                                Add Todo
                            </Button> 
                        </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm