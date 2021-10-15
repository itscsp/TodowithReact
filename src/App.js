import React, {useState, useEffect} from "react"
import './App.css';
import Form from'./components/Form';
import TodoList from'./components/TodoList';

function App() {
  // states
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  // use effect to run only once app load
  useEffect(() => {
    getLocalTodos();
  }, [])

  // use effect run every time todo and status changes
  useEffect(() => {

      switch(status) {
        case 'completed':
          setFilterTodos(todos.filter(todo =>todo.completed === true));
          break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo =>todo.completed === false));
          break;
        default:
          setFilterTodos(todos)
          break;
      }

      saveLocalTodos();


  },[todos, status])


  // to save in local storage
  const saveLocalTodos = () => {

    localStorage.setItem('todos', JSON.stringify(todos))

  }

  const getLocalTodos = () => {

    const todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
    setTodos(todoLocal)

  }

  return (
    <div className="App">
       <header>
        <h1>Ed's Todo List</h1>
      </header>

      <Form
      todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      setInputText={setInputText}
      setStatus ={setStatus}

      /> {/*components*/}
      <TodoList setTodos={setTodos}  todos={todos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
