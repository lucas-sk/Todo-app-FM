import { InputHTMLAttributes } from 'react';
import { Checkbox } from '../CheckBox';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <label
      htmlFor=''
      className='flex items-center gap-2 bg-gray-700 px-4 py-[18px]'
    >
      <Checkbox checked={false} />
      <input
        type='text'
        className='appearance-none bg-transparent text-white-500 outline-none'
        placeholder='Create a new todo...'
        {...props}
      />
    </label>
  );
};
