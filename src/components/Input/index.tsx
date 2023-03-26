import { InputHTMLAttributes } from "react"
import { Checkbox } from "../CheckBox"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export const Input = (props: InputProps) => {
  return (
    <label htmlFor="" className="flex min-w-[338px] px-4	py-[18px] bg-gray-700 gap-2 items-center">
        <Checkbox checked={false}/>
        <input type="text" className="appearance-none bg-transparent outline-none text-white-500" placeholder="Create a new todo..." {...props}/>
    </label>
  )
}