import React from 'react';

const Todos = (props) => {
 
    return(
        <div className=' one-todo-container'>
            <p>{props.keyValue+1}</p>
            <p>{props.todo.name}</p>
            <p>{props.todo.date}</p>
            <p className='clickable' onClick={props.onDeleteHandler}><i className="fa-regular fa-trash-can"></i></p>            
        </div>
    );
}

export default Todos;