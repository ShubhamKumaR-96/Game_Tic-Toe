import Icons from "../Icons/Icons"

const Cards = ({val,onClick}) => {
  return (
    <div onClick={onClick} className="border border-black p-4 flex justify-center items-center w-28 h-28 bg-yellow-300">
      {val && <Icons name={val} />}
    </div>
  )
}

export default Cards
