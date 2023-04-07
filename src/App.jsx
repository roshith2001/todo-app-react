import React, { useState } from 'react';

import Header from './components/header';
import AddNewButton from './components/AddNewButton';
import AddNew from './components/AddNew';
import TodoList from './components/TodoList';

import './App.css';

const App = () => {

  const [addNew, setAddNew] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setAddNew(!addNew)
  }
  const handleSubmit = (values) => {
    setTodos([...todos, values])
    setAddNew(!addNew);  
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  console.log(todos);
  return (
    <div className='App'>
      <Header />
      <AddNewButton handleClick={handleClick}/>
      {addNew && <AddNew submitHandler={handleSubmit}/>}
      <TodoList passTodos={todos} onDeleteJob={handleDelete}/>
    </div>
  );
}

export default App;