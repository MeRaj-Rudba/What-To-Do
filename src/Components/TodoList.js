import React from 'react';
import ToDo from './ToDo';

const TodoList = ({ toDos, setToDos, filteredTodos }) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(toDo => (
                        <ToDo toDos={toDos}
                            setToDos={setToDos}
                            key={toDo.id}
                            toDo={toDo}
                            text={toDo.text} 
                            category={toDo.category} />
                    ))
                }

            </ul>
        </div>
    );
};

export default TodoList;