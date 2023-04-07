import React, { useState } from 'react';
import Todos from './Todos';

const TodoList = (props) => {
    const todos = props.passTodos;
    const Mystyle = {
        color: 'green'
    }

    const handleDelete = (index) => {
        props.onDeleteJob(index);
    }

    return (
        <div className='box-style whole-todo' style={Mystyle}>
            {todos.map((value, index) => {
               return <Todos key={index} keyValue={index} todo={value} onDeleteHandler={() => handleDelete(index)}/>
            })}
            
        </div>
    )
}

export default TodoList;