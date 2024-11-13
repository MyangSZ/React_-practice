import { useState } from 'react'
import './App.css'

// 원시 자료형
// function App() {
//   const [number, setNunber] = useState(1)

//   const handler = () => {
//     setNunber(number +1)
//   };
//   return (
//     <>
//     number : {number}
//       <br />
//       <button onClick={handler}>상태 업데이트!</button>
//       </>
//   )
// }

// 참조자료형
function App() {
  const [array, setArray] = useState([1,2,3])

  const handler = () => {
    const newArray = [...array] 
    {/*array.slice()*/}{/*스프레드 신텍스 사용 */}
    newArray.push(5)
    setArray (newArray)
  };
  return (
    <>
     array : {array.join(",")} {/*join메서드를 써서 쉼포를 넣어 구분 되도록 */}
      <br />
      <button onClick={handler}>상태 업데이트!</button>
      </>
  )
}



export default App
