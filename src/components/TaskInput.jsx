import React from 'react';

const TaskInput = ({todo, setTodo, addTodo}) => {
    return (
        <div className={'input-wrapper'}>
            <input type={'text'} name={'todo'} value={todo} placeholder={'Create new task'}
                   onChange={(e) => {//при изменении инпута записывается новое значение
                       setTodo(e.target.value);
                   }}/>
            <button className={'add-button'} onClick={addTodo}>Add</button>
        </div>
    );
};

export default TaskInput;