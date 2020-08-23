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
    
    


    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> { ' ' }
                { title }
                <button style={ btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
