import React, { Component } from 'react'

class TodoItemList extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {
        return ( 
            <div>
                {this.props.List.map(item => (
                    <div key={item.id}>
                        <input type="checkbox" 
                            checked={item.completed} 
                            onChange={() => {this.props.changeCheckboxProp(item.id)}} 
                        />
                        {this.props.putStrikeThroughProp(item)}
                    </div>
                ))}
            </div>
        )
    }
}

export default TodoItemList
