import { Button } from '../Button';
import { Checkbox } from '../CheckBox';
import { Cross } from '../Cross';

interface todoProps {
  name: string,
  check: boolean,
  onClick(): void
  onChecked(): void
}

export const Todo = ({check, name, onClick, onChecked}: todoProps) => {

  return (
    <div className='flex items-center	justify-between border-b-2 border-zinc-900 bg-gray-700 px-4 py-[18px] hover:cursor-pointer'>
      <label
        htmlFor=''
        className='flex items-center gap-2 hover:cursor-pointer'
      >
        <Checkbox checked={check} onChange={onChecked} />
        <span className='text-white-500'>{name}</span>
      </label>
      <Button onClick={onClick}>
        <Cross />
      </Button>
    </div>
  );
};
