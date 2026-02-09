import { useState } from "react"
import Cards from "../Cards/Cards"

const Board = () => {
    const [board,setBoard]=useState(Array(9).fill(null))
    const [isTurn,setIsTurn]=useState(true)

    function handleClick(index){
        if (board[index]!==null){
            return
        }
        const newBoard=[...board];
        newBoard[index]=isTurn ? "cross":"circle"
        setBoard(newBoard)
        setIsTurn(!isTurn)
    }

  return (
    <div className="grid grid-cols-3 gap-2 w-fit">
      {board.map((val,idx)=><Cards key={idx} val={val} onClick={()=>handleClick(idx)} />)}
    </div>
  )
}

export default Board
