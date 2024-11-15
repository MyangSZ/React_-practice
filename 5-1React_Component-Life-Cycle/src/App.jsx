import { Component, useEffect, useState } from 'react'
import './App.css'

function App() {
const [showCounter, setShowCounter] = useState(false);

return (
  <>
  {/* 카운터 변수 렌더링
  showCounter 변수의 상태가 true일 때만 표시할 수 있도록 조건부 렌더링
   */}
    {showCounter && <Counter />}
  <br />
  <button onClick = {() => setShowCounter(prev => !prev)}>
    show?</button>
    {/* 상태를 바꿀수 있는 버튼. 껏다 켰다 할 수 있는 버튼 */}
  </>
)
}

function Counter() {
  const [counter, setCounter] =useState(1)

  useEffect(() => {
    console.log('useEffect')
  })

  return (
    <>
    <div> counter : {counter}</div>
    <button onClick={() => setCounter(counter + 1)}
      >+1</button>
      {/* 버튼을 눌렀을 때 +1이 되도록 한다. */}
    </>)
  }


export default App
