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
  const [counter, setCounter] = useState(1)
  const [counter2, setCounter2] = useState(100)

// 1. 컴포넌트가 최초로 렌더링 될 때에만 조작
useEffect (() => {
  console.log('맨 처음 렌더링 될 떄')
 }, [])

// 2. 컴포넌트가 리렌더링 될 때 조작
useEffect (() => {
  console.log('리렌더링...')
})

// 3. 특정 상태값이 변할 때에만 조작
useEffect(() => {
  console.log('counter의 값이 변할 때')
}, [counter])

useEffect(() => {
  console.log('counter의 값이 변할 때')
}, [counter2])

// 4. 컴포넌트가 최종적으로 언마운트 될 때 조작
useEffect(() => {
  console.log('useEffect')
  return () => {
    console.log('컴포넌트 언마운트')
  }
}, []) 


  useEffect(() => {
    console.log('useEffect')
    return () => {
      console.log('returned function')
    } // 컴포넌트가 없어지는 단게가 발생해서 리턴된 함수 호출이 된다.
  }, [counter2]) 
  // 배열의 값을 넣었을때 useEffect가 실행된다.
  // 배열(두번쨰인자)에 특정한 값을 전달해주면 값이 변경 될 때 useEffect가 호출된다.
  // 리턴함수 작성할 때는 언제 언마운트 되는지 인지를 하고 조작이 필요할때를 정확히 타겟팅 해서
  // 코드를 작성할 수 있어야 한다.
  return (
    <>
    <div> counter : {counter}</div>
    <button onClick={() => setCounter(counter + 1)}
      >+1</button>
      {/* 버튼을 눌렀을 때 +1이 되도록 한다. */}
      <div> counter2 : {counter2}</div>
    <button onClick={() => setCounter2(counter2 - 1)}
      >-1</button>
    </>)
  }


export default App
