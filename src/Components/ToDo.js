import React from 'react';

const ToDo = ({ toDo, text, toDos, setToDos, category }) => {
    //EVENTS
    const deleteHandler = () => {

        setToDos(toDos.filter((el) => el.id !== toDo.id));
    }
    const completeHandler = () => {
        setToDos(toDos.map((item) => {
            if (item.id === toDo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))

    }

    return (
        <div className="todo">
            <li className={`todo-item ${toDo.completed ? "completed" : ""}`}> Task: <span className='todo-inside-text'>{text}</span></li>
            <li className={`todo-item todo-item2 ${toDo.completed ? "completed" : ""}`}> Category: <span className='todo-inside-text'>{category}</span></li>
            <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    );
};

export default ToDo;