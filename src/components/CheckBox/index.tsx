import { InputHTMLAttributes } from "react";
import { Check } from '../Check';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className="checkbox relative right-0 left-0 top-0 bottom-0 h-[18px] w-[18px] border appearance-none checked:bg-gradient-to-b checked:from-initial-500  checked:to-end-500 border-zinc-900 rounded-full checked:border-none "
        {...props}
      />
      {!!props.checked && <Check className="absolute left-5 right-0"/>}
    </>
  );
}