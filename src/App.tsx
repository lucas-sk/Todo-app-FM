import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Picture } from "./components/Picture"
import { Todo } from "./components/Todo"

export const App = () => {


  return (
    <div className="w-screen min-h-screen bg-gray-900 flex-col gap-1">
      <Picture />
      <div className="flex flex-col  mx-6 pt-12 gap-10 relative z-1">
          <Header />
          <div className="flex flex-col gap-4">
            <Input />
            <div>
              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
            </div>
          </div>
          <p className="text-zinc-700 text-center">Drag and drop to reorder list</p>
      </div>
    </div>
  )
}
