import React from 'react';

const Form = ({ inputText, setInputText, toDos, setToDos, setStatus }) => {
    //i can write js here
    const inputTextHandler = (e) => {

        setInputText(e.target.value);
    }
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([...toDos, {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        }

        ]);
        setInputText("")
    }
    const statusHandler = (e) => {
       setStatus(e.target.value)
    }


    return (

        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>


    );
};

export default Form;