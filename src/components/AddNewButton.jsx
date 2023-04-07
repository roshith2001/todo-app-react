import React from 'react';

const AddNewButton = (props) => (
    <div className='box-style button-holder'>
        <button onClick={props.handleClick}>Add New <i className="fa-solid fa-plus"></i></button>
    </div> 
    );

export default AddNewButton;