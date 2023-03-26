import Sun from "../Sun"

export const Header = () => {
  return (
    <header className="flex justify-between ">
      <h3 className="text-[1.625rem] font-bold  text-white-700 tracking-[0.4em]">
        TODO
      </h3>
      <Sun />
    </header>
  )
}