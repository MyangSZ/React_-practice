
import { Component, useState } from 'react';
import './App.css'


//함수형 컴포넌트

// function App() {
//   // 배열의 형태 useState(0) => [상태, 상태변경함수]
//   // 구조분해 할당 문법 사용 const [상태, 상태변경함수] = useState(0)
//   // useState로 상태를 만드는 코드는 최상단에 위치
//   const [counter, setCounter] = useState(0) 
//   return (
//     <>
//     <Count 
//       counter={counter} 
//       hello={"hello"} 
//       array={[1, 2, 3, "안녕하세요"]}/>
//     <button onClick={() => {
//       setCounter((prev) => prev + 1) // 함수를 전달해서 변경하는 방법. 
//       // (이전상태값) => 현재상태값(=이전상태값) +1
//     }}>+</button>

//     <button onClick={() => {
//       setCounter(counter - 1) // 상태변경함수에 다음 상태값을 직접 넘겨주는 방법
//       }}>-</button>
//     </>
//   );
// }

// function Count ({array, counter, hello}) {
//   console.log('array', array)
//   console.log('counter', counter)
//   console.log('hello', hello)
//   return <div>Counter : {counter}</div>
// }


// 클래스형 컴포넌트
class ClassApp extends Component {
  state = {counter: 1}
  render() {
    return (
      <>
      <Count counter={this.state.counter} />
      <button onClick={()=> this.setState({counter: this.state.counter + 1})}>+</button>
      <button onClick={()=> this.setState({counter: this.state.counter - 1})}>-</button>
      </>
    )
  }
}

class Count extends Component {
  // constructor(props){  // constructor 작성해주지 않아도 기본 
  //   super(props);}   // constructor를 받아와서 프롭스를 받아와서 실행시켜준다.
  render(){
    console.log("props", this.props)
    return <div>counter {this.props.counter}</div>
  }
}


//export default FunctionApp;
export default ClassApp
