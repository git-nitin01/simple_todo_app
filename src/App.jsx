import AddInput from "./component/AddInput"
import TodoList from "./component/TodoList"
import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      {console.log(todos)}
      <h1>Welcome to simple Todo app</h1>
      <AddInput todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
