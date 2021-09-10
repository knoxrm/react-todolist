import React, { Component } from 'react'
import TodoItemList from './TodoItemList'
import { v4 as uuidv4 } from "uuid"
import * as Mui from '@material-ui/core'


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
                <container fixed>
                <div>
                    <Mui.FormLabel onSubmit={this.handleElementSubmit}>
                        <Mui.Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                            <label>
                                { /* <input type="text" name={this.state.element} onChange={this.handleElementChange} /> */}
                                    <Mui.TextField id="standard-basic" justify=""onChange={this.handleElementChange}/>
                            </label>
                            <input type="submit" value="Submit" />
                        </Mui.Grid>
                    </Mui.FormLabel>
                </div>
                <div>
                    <TodoItemList List={this.state.TodoList} 
                    changeCheckboxProp={this.changeCheckbox} 
                    putStrikeThroughProp={this.putStrikeThrough}
                    />
                </div>
                </container>
            </div>
        )
    }
}

export default Todo
