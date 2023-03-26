import { useState } from "react";
import { Checkbox } from "../CheckBox";
import { Cross } from "../Cross";

interface todoProps {}

export const Todo = () =>{
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex min-w-[338px] px-4	py-[18px] hover:cursor-pointer bg-gray-700 items-center justify-between border-b-2 border-zinc-900">
      <label htmlFor="" className="flex gap-2 items-center hover:cursor-pointer">
        <Checkbox checked={checked} onChange={handleCheckboxChange}/>
        <span className="text-white-500">Create a new todo...</span>
      </label>
      <Cross />
    </div>
  )
}