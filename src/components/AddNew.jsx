import React, { useState } from 'react';

const AddNew = (props) => {
    const mystyle = {
        color: '#0e7a0e',
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const taskNameInput = event.target.elements['task-name'];
        const taskDateInput = event.target.elements['task-date'];

        const taskName = taskNameInput.value;
        const taskDate = taskDateInput.value;

        props.submitHandler({name: taskName, date: taskDate})
        
    }
    return(
    <div className='box-style main-container'>
        <form onSubmit={handleSubmit}>
            <div className='box-style question-holder'>
                <label htmlFor='task-name' style={mystyle}>What's the task?</label>
                <input type='text' name='task-name'/>
            </div>
            <div className='box-style question-holder'>
                <label htmlFor='task-date' style={mystyle}>When should it be completed?</label>
                <input type='date' name='task-date'/>
            </div>
            <input type='submit' value='Add' className='box-style submit-button'/>
        </form>
    </div> 
);
       
}

export default AddNew;