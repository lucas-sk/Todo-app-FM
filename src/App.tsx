import { useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Picture } from './components/Picture';
import { Todo } from './components/Todo';
import { todo } from './interface/todo';

export const App = () => {
  const [todos, setTodos] = useState<todo[]>([]);


  const listTodos: todo[] = [
    { id: '1', name: 'todo', check: true },
    { id: '2', name: 'todo', check: false },
    { id: '3', name: 'todo', check: false },
    { id: '4', name: 'todo', check: false },
    { id: '5', name: 'todo', check: false },
    { id: '6', name: 'todo', check: false },
  ];

  return (
    <div className='min-h-screen w-screen flex-col gap-1 bg-gray-900'>
      <Picture />
      <div className='z-1 relative  mx-6 flex flex-col gap-10 pt-12'>
        <Header />
        <div className='flex flex-col gap-4'>
          <Input />
          <div className=''>
          <>
            {listTodos.length > 0 && listTodos.map((todo) => {
              return (
                <>
                  <Todo key={todo.id} check={todo.check} name={todo.name}/>
                </>
                )
              })}
              <div className='flex px-4 py-[18px] justify-between bg-gray-700 w-full text-zinc-500'>
                <p>{listTodos.length} Items left</p>
                <p>Clear Completed</p>
              </div>
          </>
          </div>
              <div className='flex px-4 py-[18px] gap-4 justify-center bg-gray-700 w-full text-zinc-500'>
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
              </div>
        </div>
        <p className='text-center text-zinc-700'>
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
};
