
// TodoList.tsx
import { useState } from 'react';


// TodoTypes.ts
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// TodoItem.tsx
import React from 'react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <div >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li >
  );
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div >
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit} >
        <div >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
          />
          <button
            type="submit"

          >
            Add
          </button>
        </div>
      </form>

      <ul >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {todos.length === 0 && (
        <p >No Todos Yet</p>
      )}
    </div>
  );
};




const App: React.FC = () => {
  return (
    <div >
      <TodoList />
    </div>
  );
};

export default App;