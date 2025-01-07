import { useState, useMemo } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  // why not do useState({todos: [], inputValue: ""}) ? -> setState({todos: [...todos, inputValue], inputValue: ""})
  const [todos, setTodos] = useState([{
    item: "complete react workshop",
    done: false
  }])
  const [inputValue, setInputValue] = useState("")
  const error = inputValue.length < 3 || inputValue.length > 20 ? true:false;
  const shouldCongratulate = useMemo(()=>todos.filter(todo=>todo.done===true).length >= 3);

  return <form method="GET" onSubmit={(event)=>{
    event.preventDefault()
    todos.push({
      item:inputValue,
      done: false
    })
    setTodos([...todos])
  }}>
    <div style={{display:"flex"}}>
    <input type="text" name="todo-name" value={inputValue} onChange={e=>{
      console.log(e.target.value)
      setInputValue(e.target.value.toUpperCase())
    }} />

    <button disabled={error}>Add</button>
    </div>
    {error && <p style={{
      color: "red"
    }}>Input must be between 3 and 20 characters</p>}
    <ul>
      {todos.map((todo,idx) => {
        return <li key={idx}>{todo.item} <input type="checkbox" checked={
          todo.done
        }
        onChange={(e)=>{
          console.log(todo,e.target.checked)
          todos[idx].done = !todos[idx].done
          setTodos([...todos])
        }} /></li>
      })}
    </ul>
    {shouldCongratulate && <p style={{
      color: "green"
    }} >Congratulations! You have completed atleast 3 tasks</p>}
  </form>  
}

export default App
