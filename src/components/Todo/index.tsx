import { Checkbox } from "../CheckBox"
import { Cross } from "../Cross"

export const Todo = () =>{
  return (
    <div className="flex min-w-[338px] px-4	py-[18px] bg-gray-700 items-center justify-between border-b-2 border-zinc-900">
      <label htmlFor="" className="flex gap-2 items-center">
        <Checkbox />
        <span className="text-white-500">Create a new todo...</span>
      </label>
      <Cross />
    </div>
  )
}