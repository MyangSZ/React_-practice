import { useState } from 'react'
import './App.css'

function App() {
  const {count, increment, decrement} = useCounter(0, 5) // 5=step

  // const { loading: loading1, data: data1 } = useFetch("서버주소")
  // const { loading: loading2, data: data2 } = useFetch("서버주소")
  // const { loading: loading3, data: data3 } = useFetch("서버주소")

  return (
    <>
    <div>count: {count}</div>
    
    {/* <button onClick={() => setCount((prev) => prev +1)}>+</button>
    <button onClick={() => setCount((prev) => prev -1)}>-</button> */}

{/* 위 함수를 아래처럼 간단하게 바꿀수 있다. */}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    {/* 로딩중이 아닐경우 띄우지 않기 */}
    {!loading1 && (
      <ul>
        {data1.map(el => <li key={'data1' + el.id}>{el.content}</li>)}
      </ul>
    )}
    </>
  )
}

// ** 여러가지 컴포넌트에서 데이터를 받아와야 할 경우.
// useFecth를 사용해서 커스텀훅 만들기

const useFetch = (url) => { // url을 인자로 받아서 요청하고 받아오는 기능하는 훅
  const [loading, setLoading] = useState(true) // 로딩 관리하는 상태
  const [data, setData] = useState(null) // 데이터 받아올 공간
  const [error, setError] = useState(null) // 에러발생 시 상태를 받아볼수 있도록


  useEffect(() => {
    fetch(url)  // url에 요청보냄
    .then((res) => res.json()) 
    .then((res) => {setData(res)  // 프로미스 체이닝으로 데이터 받기
      setLoading(false)
    })
    .catch((err) => {setError(err)
      setLoading(false)
    }) // 에러발생 시 상태 받아볼 수 있도록.
  }, [url])

  return { loading, data, error }
}








const useCounter = (initiaValue = 0, step =1)=> {
  const [count, setCount] = useState(initiaValue)
  // 상태를 조작하는 함수 만들기.
  // step 해당값으로 연산하게끔 한다.
  const increment = () =>setCount((prev) => prev + step); // 값을 증가시키는 함수
  const decrement = () =>setCount((prev) => prev - step); // 값을 차감시키는 함수

  return {count, increment, decrement}
}

export default App
