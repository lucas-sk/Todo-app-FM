import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Picture } from './components/Picture';
import { Todo } from './components/Todo';
import { todo } from './interface/todo';

export const listTodos: todo[] = [
  { id: '1', name: 'todo', check: true },
  { id: '2', name: 'todo', check: false },
  { id: '3', name: 'todo', check: false },
  { id: '4', name: 'todo', check: false },
  { id: '5', name: 'todo', check: false },
  { id: '6', name: 'todo', check: false },
];

export const App = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState<todo[]>(listTodos);
  const [todosNotView, setTodosNotView] = useState<todo[]>(todos);

  const handleNameTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

   const handleAddTodo = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log('Enter pressionado!');
      const todo: todo =  {
      name: name,
      check: false,
      id: `${todos.length + 1}`
    }
    setTodos([todo, ...todos ]);
    setTodosNotView([todo, ...todos ]);
    setName("");
    }
  }

  const handleRemoveTodo = (id: string): any => {
    const newList = todos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(newList)
    setTodosNotView(newList)
  }

  const handleCheckboxChange = (id: string) => {
    const newList1 = todos.map((todo) => todo.id === id ? {...todo, check: !todo.check } : todo )
    setTodos(newList1)
    setTodosNotView(newList1)
  };

  const filterTodoActive = () => {
    const ce = todosNotView.filter((todo) => todo.check !== true ? todo : null)
    setTodos(ce)
  }

  const filterTodoAll = () => {
    setTodos(todosNotView)
  }

  const filterTodoCompleted = () => {
    const ce = todosNotView.filter((todo) => todo.check !== false ? todo : null)
    setTodos(ce)
  }

  const handleCheckedAllTodos = () => {
    const listCheckedAllTodos = todos.map((todo) => {
      return {...todo, check: true}
    })
    setTodos(listCheckedAllTodos)
    setTodosNotView(listCheckedAllTodos)
  }

  return (
    <div className='min-h-screen flex flex-col items-center max-w-full	w-screen bg-gray-900'>
      <Picture />
      <div className='z-1 relative max-w-lg w-80 mx-6 h-auto flex flex-col gap-10 pt-12'>
        <Header />
        <div className='flex flex-col gap-4'>
          <Input onChange={handleNameTodo} value={name} onKeyDown={handleAddTodo} />
          <div className=''>
          <>
            {todos.length > 0 && todos.map((todo) => {
              return (
                <>
                  <Todo key={todo.id} check={todo.check} name={todo.name} onClick={() => handleRemoveTodo(todo.id)} onChecked={() => handleCheckboxChange(todo.id)}/>
                </>
                )
              })}
              <div className='flex px-4 py-[18px] justify-between bg-gray-700 w-full text-zinc-500'>
                <p>{todos.length} Items left</p>
                <Button onClick={() => handleCheckedAllTodos()}>Clear Completed</Button>
              </div>
          </>
          </div>
              <div className='flex px-4 py-[18px] gap-4 justify-center bg-gray-700 w-full text-zinc-500'>
                <Button onClick={() => filterTodoAll()}>All</Button>
                <Button onClick={() => filterTodoActive()} >Active</Button>
                <Button onClick={() => filterTodoCompleted()}>Completed</Button>
              </div>
        </div>
        <p className='text-center text-zinc-700'>
          Drag and drop to reorder list
        </p>
      </div>
    </div>

  );
};
