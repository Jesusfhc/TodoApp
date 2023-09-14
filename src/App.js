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

  const searchTodos = todos.filter(
    (todo)=> {
      return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo=> todo.text === text));
    newTodos[todoIndex].completed = true 
    setTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo=> todo.text === text));
    newTodos.splice(todoIndex,1);
    setTodos(newTodos)
  };


  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>

        {searchTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text)} onDelete={()=> deleteTodo(todo.text)}/>
        ))}

      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
