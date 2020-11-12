import React from 'react';

const Form = ({ inputText, setInputText, toDos, setToDos, setStatus, inputCategory, setInputCategory, errMsg, setErrorMsg }) => {
    //i can write js here
    const inputTextHandler = (e) => {

        setInputText(e.target.value);
    }
    const inputCategoryHandler = (e) => {

        setInputCategory(e.target.value);
    }
    const submitToDoHandler = (e) => {
        e.preventDefault();
        if (inputText && inputCategory) {
            setToDos([...toDos, {
                text: inputText,
                category: inputCategory,
                completed: false,
                id: Math.random() * 1000
            }]);

        }
        else {
            const errMsg = "Fill both task and category";
            setErrorMsg(errMsg)
        }

        setInputText("")
        setInputCategory("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }


    return (

        <form>
            <input onChange={inputTextHandler} placeholder='Task Name' type="text" className="todo-input" value={inputText} />
            <input onChange={inputCategoryHandler} placeholder='Task Category' type="text" className="todo-input" value={inputCategory} />
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
            <p>{errMsg}</p>
        </form>


    );
};

export default Form;