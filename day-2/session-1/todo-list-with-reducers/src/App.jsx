import { useReducer, useMemo } from 'react'

const TODO_ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
}

const INPUT_ACTIONS = {
  SET_INPUT: 'SET_INPUT',
  CLEAR_INPUT: 'CLEAR_INPUT'
}

function isContentSafe (content) {
  const specialChars = /[!@#$%^&*]/;
  return !specialChars.test(content);
};


function todoReducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      if (!isContentSafe(action.payload)) {
        return state; // Return unchanged state if content has special chars
      }
      return [...state, { item: action.payload, done: false }]
    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map((todo, index) => 
        index === action.payload ? {...todo, done: !todo.done} : todo
      )
    default:
      return state
  }
}

function inputReducer(state, action) {
  switch (action.type) {
    case INPUT_ACTIONS.SET_INPUT:
      return action.payload
    case INPUT_ACTIONS.CLEAR_INPUT:
      return ''
    default:
      return state
  }
}

const todosInitialState = [{
  item: "complete react workshop",
  done: false
}]

const inputInitialState = ""

function App() {
  const [todos, todosDispatch] = useReducer(todoReducer, todosInitialState)
  const [inputValue, inputDispatch] = useReducer(inputReducer, inputInitialState)
  
  const error = inputValue.length < 3 || inputValue.length > 20
  const shouldCongratulate = useMemo(() => todos.filter(todo => todo.done === true).length >= 3)

  return <form method="GET" onSubmit={(event) => {
    event.preventDefault()
    todosDispatch({ type: TODO_ACTIONS.ADD_TODO, payload: inputValue })
    inputDispatch({ type: INPUT_ACTIONS.CLEAR_INPUT })
  }}>
    <div style={{display:"flex"}}>
      <input 
        type="text" 
        name="todo-name" 
        value={inputValue} 
        onChange={e => inputDispatch({ 
          type: INPUT_ACTIONS.SET_INPUT, 
          payload: e.target.value.toUpperCase() 
        })} 
      />
      <button disabled={error}>Add</button>
    </div>
    {error && <p style={{color: "red"}}>Input must be between 3 and 20 characters</p>}
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>
          {todo.item}
          <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => todosDispatch({ 
              type: TODO_ACTIONS.TOGGLE_TODO, 
              payload: idx 
            })} 
          />
        </li>
      ))}
    </ul>
    {shouldCongratulate && <p style={{color: "green"}}>
      Congratulations! You have completed atleast 3 tasks
    </p>}
  </form>  
}

export default App