import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood]  = useState('Normal')
  return (
  <>
{/* 페이스 컴포넌트 조건문 만들기 */}
  <Face3 mood={mood} />
  {/* 클래스명을 지정해줄수 있다. 삼항연산자는 클래스명을 바꿀 때도 사용 가능 */}
  <div className = {mood ==="Happy" ? "happy": 
    mood === "Normal" ? "normal" : "sad"}>기분: {mood}</div>
  <div>
    <button onClick={() => setMood("Happy")}>Happy</button>
    <button onClick={() => setMood("Normal")}>Normal</button>
    <button onClick={() => setMood("Sad")}>Sad</button>
  </div>
  </>
  )
}

// 조건부 렌더링
function Face({mood}) {
  // if문으로 리턴하는 JSX문 바꿔주기
  if (mood === "Happy") { // 받아온 무드가 해피일 경우
    return <h1>🤗</h1>// ("🤗");
  } else if (mood === "Normal") { // 받아온 무드가 노말일 경우
    return <h1>🙂</h1>//("🙂");
  }else { // 
    return <h1>😭</h1>//("😭");
  }
}

// 삼항 연산자 사용하기. return문 하나안에서 무엇을 랜더링 할 것인지 구분 할 수 있다ㅏ.
function Face2 ({mood}) {
  return (
    <>
    {mood === "Happy" ? (
      <div>🤗</div>
    ) : mood === "Normal" ? (
      <p>🙂</p>
    ) : (
      <span>😭</span>
    )
  }
    </>
  )
}

// 논리연산자
function Face3({mood}) {
  return (
  <>
  {mood === "Happy" && <div>🤗</div>}
  {mood === "Normal" && <div>🙂</div>}
  {mood === "Sad" && <div>😭</div>}
  </>
  )
}



export default App;