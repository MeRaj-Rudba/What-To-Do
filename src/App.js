import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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
      <header classname='head-line'>What to do!</header>
      <Form

        toDos={toDos}
        setToDos={setToDos}

        inputCategory={inputCategory}
        setInputCategory={setInputCategory}

        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}

        inputText={inputText}
        setInputText={setInputText}

        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        toDos={toDos}
        setToDos={setToDos}
      />

      <Footer/>
    </div>
  );
}

export default App;
