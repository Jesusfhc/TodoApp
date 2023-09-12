import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; 
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';



const defaultTodos = [
  {text:"Calabazas", completed:true},
  {text:"Acta de Blur", completed:false},
  {text:"Presentar Acta", completed:true},
  {text:"Comprar mani", completed:false},
  {text:"Consignar oferta real", completed:false}
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>

        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}

      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
