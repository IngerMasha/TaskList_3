import React from 'react';
import {useState} from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './App.css' ;
const App = () => {
    const [todos, setTodos] = useState([]);//массив всех задач
    const [todo, setTodo] = useState("");//задача
    const addTodo = () => {
        if (todo !== '') {//добавили новую задачу в массив
            setTodos([...todos, todo]);
            setTodo('')//обнулили задачу
        }
    };
    const deleteTodo = (text) => {
      const newTodos = todos.filter((todo)=>{return todo!==text});
      setTodos(newTodos)
    };
    return (
        <div className={'App'}>
            <h1>React ToDo app</h1>
            <TaskInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <TaskList list={todos} remove={deleteTodo}/>
        </div>
    );
};

export default App;