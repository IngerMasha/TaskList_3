import React from 'react';

const TaskList = ({list, remove}) => {
    return (
        <>
        {list?.length > 0 ? (
            <ul className={'todo-list'}>
                {
                    list.map((entry, index) => (
                        <div className={'todo'}>
                            <li key={index}>{entry}</li>
                            <button className={'delete-button'} onClick={()=>{remove(entry)}}>Delete</button>
                        </div>
                    ))}
            </ul>) : (
            <div className={'empty'}>
                <p>No tasks yet</p>
            </div>)
}
</>
    );
};

export default TaskList;