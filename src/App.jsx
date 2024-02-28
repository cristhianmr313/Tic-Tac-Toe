import { useState } from "react";
import './App.css'
const  TURNS ={
  X:'x',
  O:'o'
}


const Sguare = ({updateBoard, children, index, isSelected})=>
{
 const className =`sguare ${isSelected ? 'is-selected' : ''}`

  return(
    <div className={className} >
      {children}
      
    </div>
  )
}
function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn]= useState(TURNS.X)
  return ( 
    <main className="board">
    <h1>
      Tic-Tac-Toe
    </h1>
    <section className="game"> 
     {board.map((_,index)=>{
      return(
        <Sguare key={index} index={index}>
          
         
        </Sguare>
      )
       
     })}
    </section>
    <section className="turn">
     <Sguare isSelected={turn===TURNS.X}>
      {TURNS.X}
      </Sguare>
     <Sguare isSelected={turn===TURNS.O}>
      {TURNS.O}
      </Sguare>
    </section>
    </main>
    
  
  
   )
}

export default App;
