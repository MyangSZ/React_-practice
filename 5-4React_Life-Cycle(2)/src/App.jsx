import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect (() => {
    fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((res) => setData(res))
  }, [])

  return (
    <>
      <div>데이터 목록</div>
      {data.map (el => <div key={el.id}
      >{el.content}</div>)}
      <MouseFollower />
      <ScrollIndicator />
      <div style={{heigth: "500vh"}}></div>
      <AlertTimer />
    </>
  )
}

// 마우스 위치를 이용해 마우스를 따라다니는 컴포넌트
const MouseFollower = () => {
  const [position, setPosition] = useState({X:0, y:0})
  useEffect (() => {
    const handleMouseNove = (event) => {
      setPosition({x: event.clientX, y: event.clientY})
      console.log("mouseMoved!!")
    }
  // movesover도 이 예시에서 잘 작동하지만, mousemove를 사용하는 것이 더 적합.
    window.addEventListener("mouseover", handleMouseNove);
    return () => { // 클린업함수를 사용해서 효율적이게 사용할 수 있다.
      window.removeEventListener("mouseover", handleMouseNove);
    }
  })

  return (
    <div style={{
      position: "fixed",
      top: position.y,
      left: position.x,
      width: "20px",
      height: "20px",
      borderRadius: "50%" ,
      background: "pink",
      transform: "translate(-50%, -50%)",
      // 클릭이벤트를 가로막지 못하도록 하는 방법
      pointerEvents: "none"
    }}></div>
  )
}

  // 스크롤 위치를 알려주는 컴포넌트
  const ScrollIndicator = () => {
    const [scrollWidth, setScrollWidth] =useState (0)
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        const windowHeight = 
        // 전체 길이에서 화면의 높이를 빼서 스크롤 할 수 있는 높이 구하기
        document.documentElement.scrollHeight
        - document.documentElement.clientHeight
        const scrollPercentate = (scrollTop / windowHeight) * 100;
        setScrollWidth(scrollPercentate);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    })
  
    return (
      <div style = {{
        position: "fixed",
        top : 0,
        left : 0,
        width: `${scrollWidth}%`,
        height: "10px",
        background: "pink"
      }}></div>
    )
  }
// 타이머 함수
// 타이머 함수는 항상 잘 끄고 나오자
// 타이머함수를 쓰면서 클린업 함수를 쓰지 않으면 예기치 않은 일이 발생 할 수 있다.
  const AlertTimer = () => {
    const [showAlert, setShowAlert] = useState(true)

    useEffect(() => {
      const setTimeoutID = setTimeout(() => {
        showAlert === true ? alert('시간 초과') : null
      }, 3000)
      return () => {
        clearTimeout(setTimeoutID)
      }
    })

    return(
      <button onClick={()=> setShowAlert(false)}>클릭 클릭!!</button>
    )
  }



export default App
