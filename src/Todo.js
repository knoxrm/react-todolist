import React, { Component } from 'react'


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


    handleElementSubmit = (event) => {
        this.setState({
            TodoList: [...this.state.TodoList, this.state.element]
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
                    {this.state.TodoList.map(item => (
                        <div>
                            <input type="checkbox" />
                            <label>{item}</label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Todo
