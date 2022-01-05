import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'

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
                        <Grid container justifyContent="center">
                            <Grid item xs={4}>
                                <Checkbox 
                                    checked={item.completed} 
                                    onChange={() => {this.props.changeCheckboxProp(item.id)}} 
                                />
                                {this.props.putStrikeThroughProp(item)}
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </div>
        )
    }
}

export default TodoItemList
