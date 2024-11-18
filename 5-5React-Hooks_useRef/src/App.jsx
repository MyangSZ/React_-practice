import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  return(
  <>
  <ControlledInput />
  <br />
  <UseReftInput />
  <Counter />
  </>)

}

export default App;

const Counter = () => {
  const [counter, setCounter] = useState (0)
  const numberRef = useRef(null)
  return (
    <>
    <div> counter: {counter}</div>
    {/* 카운터버튼 + , -  */}
    <button onClick={() => setCounter(prev => prev +1)}>+</button>
    <button onClick={() => setCounter(prev=> prev -1)}>-</button>
    <br />
    {/* 특정값을 저장할 수 있는 버튼 */}
    <button onClick={() => numberRef.current = counter}>Keep Value</button>
    {/* 킵벨류 값을 확인 할수 있는 버튼 */}
    <button onClick={()=> console.log(numberRef.current)}>Show Value</button>
    </>
  )
}

const UseReftInput = () => {
  const inputRef = useRef(null)
  const getInputValue = () => {
    console.log(inputRef.current.value)
  }
  // 포커스 주기(특정 인풋요소에 포커스 주기)
  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
  <>
  <input ref={inputRef}/>
  <br />
  <button onClick={getInputValue}>Input 값 가져오기</button>
  <br />

  <button onClick={focusInput}>Focus!!</button>
  </>
  )

}


const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("")
  console.log("ControlledInput")
  return(
    <input value={inputValue} 
    onChange={(event) => setInputValue(event.target.value)}></input>
  )
}



