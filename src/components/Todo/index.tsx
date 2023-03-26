import { useState } from 'react';
import { Checkbox } from '../CheckBox';
import { Cross } from '../Cross';

interface todoProps {
  name: string,
  check: boolean
}

export const Todo = ({check, name}: todoProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    console.log(check)
    check = checked
    setChecked(!checked);
  };
  return (
    <div className='flex items-center	justify-between border-b-2 border-zinc-900 bg-gray-700 px-4 py-[18px] hover:cursor-pointer'>
      <label
        htmlFor=''
        className='flex items-center gap-2 hover:cursor-pointer'
      >
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <span className='text-white-500'>{name}</span>
      </label>
      <Cross />
    </div>
  );
};
