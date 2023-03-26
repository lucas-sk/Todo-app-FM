import { useState } from "react";
import { Check } from '../Check';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className="h-[18px] w-[18px] border appearance-none checked:bg-gradient-to-b from-initial-500  to-end-500  border-zinc-900 rounded-full"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {!!checked && <Check className="absolute left-1  top-[5px]"/>}
    </>
  );
}