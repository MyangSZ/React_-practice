
import { Component, useState } from 'react';
import './App.css'


//함수형 컴포넌트

function App() {
  // 배열의 형태 useState(0) => [상태, 상태변경함수]
  // 구조분해 할당 문법 사용 const [상태, 상태변경함수] = useState(0)
  // useState로 상태를 만드는 코드는 최상단에 위치
  const [counter, setCounter] = useState(0)
  return (
    <>
    <div>counter : {counter}</div>
    <button onClick={() => {
      setCounter((prev) => prev + 1) // 함수를 전달해서 변경하는 방법. 
      // (이전상태값) => 현재상태값(=이전상태값) +1
    }}>+</button>

    <button onClick={() => {
      setCounter(counter - 1) // 상태변경함수에 다음 상태값을 직접 넘겨주는 방법
      }}>-</button>
    </>
  );
}


// 클래스형 컴포넌트
class App extends Component {
  state = {counter: 1}
  render() {
    return (
      <>
      <div>counter {this.state.counter}</div>
      <button onClick={()=> this.setState({counter: this.state.counter + 1})}>+</button>
      <button onClick={()=> this.setState({counter: this.state.counter - 1})}>-</button>
      </>
    )
  }
}
export default App
