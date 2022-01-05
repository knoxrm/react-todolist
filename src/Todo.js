import React, { Component } from 'react'
import TodoItemList from './TodoItemList'
import { v4 as uuidv4 } from "uuid"
import { Container, Button, TextField, Box} from '@mui/material'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            element: '',
            TodoList: []
        }

        this.handleElementChange = this.handleElementChange.bind(this)
        this.handleElementSubmit = this.handleElementSubmit.bind(this)
    }


    handleElementChange = (event) => {
        this.setState({ 
            element : event.target.value
        })
    }

    changeCheckbox = (id) => {
        let List = this.state.TodoList.map((i) => {
            if (i.id===id) {
                i.completed = !i.completed
                return i
            }
            return i
        })
        this.setState({
            TodoList: List
        })
    }


    putStrikeThrough = (item) => {
        if (item.completed) {
            return <label><del>{item.title}</del></label> 
        }
        return <label>{item.title}</label>
    }


    handleElementSubmit = (event) => {
        let newTodo = {
            id: uuidv4(),
            title: this.state.element,
            completed: false
        }
        this.setState({
            TodoList: [...this.state.TodoList, newTodo] 
        })
        event.preventDefault();
    }



    render() {
        return (
            <div>
                <Container fixed>
                <div classname="box">
                    <Box sx={{mt:"4rem"}} 
                        component="form"
                        noValidate
                        autoComplete="off"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    > 
                        <div className="alignment">
                            <div>
                                <TextField id="standard-basic" style = {{width: "50rem"}} onChange={this.handleElementChange}/>
                            </div>
                            <div className="button-padding">
                                <Button variant="contained" onClick={this.handleElementSubmit}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <TodoItemList List={this.state.TodoList} 
                        changeCheckboxProp={this.changeCheckbox} 
                        putStrikeThroughProp={this.putStrikeThrough}
                    />
                </div>
                </Container>
            </div>
        )
    }
}

export default Todo
