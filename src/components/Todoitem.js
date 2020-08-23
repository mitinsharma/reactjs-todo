import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        /*
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        }
        return {
            textDecoration: 'none'
        }
        */

        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    markComplete = (e) => {
        console.log(this.props)
    }


    render() {
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={this.markComplete}/> { ' ' }
                { this.props.todo.title }
            </div>
        )
    }
}


//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#f4f4f4' 
}

export default TodoItem
