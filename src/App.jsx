import {useState,useRef} from 'react'

const App=()=>{
  const [color,setColor]= useState('black')
  const h3 = useRef(null)

 const text=()=>{
  setColor('green')
 }

 const useRefdemo=()=>{
  h3.current.style.color = "red"

 }

return(
  <div>
  <h1 style={{ color:color, }}>AKASH</h1>
  <button onClick={text}>Use StateClick</button> <br/>
  

  <h3  ref={h3}>  Maurya</h3>
  <button onClick={useRefdemo}>useRef Click</button>
  </div>
)

}
export default App