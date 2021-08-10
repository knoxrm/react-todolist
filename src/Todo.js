import React, { Component } from 'react'
import TodoItemList from './TodoItemList'
import { v4 as uuidv4 } from "uuid"


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
                <div>
                    <form onSubmit={this.handleElementSubmit}>
                        <label>
                            <input type="text" name={this.state.element} onChange={this.handleElementChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <TodoItemList List={this.state.TodoList} changeCheckboxProp={this.changeCheckbox} />
                </div>
            </div>
        )
    }
}

export default Todo
