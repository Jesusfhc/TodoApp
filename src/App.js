import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

import './App.css';

const defaultTodos = [
  {text:"Calabazas", completed:true},
  {text:"Acta de Blur", completed:false},
  {text:"Presentar Acta", completed:true},
  {text:"Comprar mani", completed:false}
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={20} />

      <TodoSearch />

      <TodoList>

        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}

      </TodoList>

      <CreateTodoButton />


    </React.Fragment>
  );
}

export default App;
