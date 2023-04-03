import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}


export const Button = (props: ButtonProps) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}