import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  //functions

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(toDos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(toDos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(toDos)
        break;
    }
  }
  //UseEffect

  useEffect(() => {
    getFromLocalStorage();
  }, [])
  useEffect(() => {
    filterHandler();
    saveToLocalStorage();
  }, [toDos, status])

  //save to local machine! exciting....
  const saveToLocalStorage = () => {

    localStorage.setItem("toDos", JSON.stringify(toDos));

  }
  const getFromLocalStorage = () => {
    if (localStorage.getItem('toDos') === null) {
      localStorage.setItem('toDos', JSON.stringify([]));
    }
    else {
      let todolocal = JSON.parse(localStorage.getItem('toDos'));
      setToDos(todolocal);
    }
  }

  return (
    <div className="App">
      <header>What to do!</header>
      <Form
        inputText={inputText}
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        toDos={toDos}
        setToDos={setToDos}
      />
    </div>
  );
}

export default App;
