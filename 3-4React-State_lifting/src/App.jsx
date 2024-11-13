
import { Component, useState } from 'react';
import './App.css'


//함수형 컴포넌트

function FunctionApp() {
  //  배열의 형태 useState(0) => [상태, 상태변경함수]
  //  구조분해 할당 문법 사용 const [상태, 상태변경함수] = useState(0)
  //  useState로 상태를 만드는 코드는 최상단에 위치
  const [counter, setCounter] = useState(0) 
  const [inputValue, setInputValue] = useState(0) //  상태만들기

  // 부모 컴포넌트에서 어떻게 변경 시킬지 함수로 따로 작성해서 내려줄수 있다.
  const incrementCounter = () => {
    setCounter(counter + 1);
  }
  const decrementCounter = () => {
    setCounter(counter - 1);
  }

  const setCounterNumber = () => {
    setCounter(inputValue)
  }
  return (
    <>
    <Count counter={counter} />
    
    <PlusButton setCounter={setCounter} 
    incrementCounter={incrementCounter}/>
    
    <MinusButton setCounter={setCounter} 
    decrementCounter={decrementCounter}/>
    
    <CounterInput inputValue={inputValue} 
    setInputValue={setInputValue}
    // setCounter={setCounter}
    setCounterNumber={setCounterNumber}
    />

    {/* <button onClick={() => {
      setCounter((prev) => prev + 1) // 함수를 전달해서 변경하는 방법. 
      //  (이전상태값) => 현재상태값(=이전상태값) +1
    }}>+</button> */}

    {/* <button onClick={() => {
      setCounter(counter - 1) // 상태변경함수에 다음 상태값을 직접 넘겨주는 방법
      }}>-</button> */}
    </>
  );
}

function CounterInput({inputValue, setInputValue, setCounter, setCounterNumber}) {
  return (
    <>
    <input type='number' value={inputValue} 
    onChange={() => setInputValue(event.target.value)} />
    {/* 인풋의값이 변경되는 이벤트 onChange.
    인풋의 값이 변경되는 이벤트, 이벤트가 일어나는 인풋 요소의 돔 주소, 인풋 요소의 값 = event.target.value */}

    <button onClick={setCounterNumber}>입력</button>
    {/* <button onClick={() => setCounter(inputValue)}>입력</button> */}
    </>
  )
}



function PlusButton({setCounter, incrementCounter}) {
  return (
    <button onClick={incrementCounter}>+</button>
    // <button onClick={() => {setCounter((prev) => { 
    //   // 리엑트 상태변경 함수에 인자를 함수로 전달하면 그 함수가 리턴하는 값이 새로운 상태값이 되는데...
    //   // 중괄호 감싼 경우 return을 적어줘야 한다.
    //   return prev + 1})
    //   }}>
    //   +
    // </button>
  )
}
function MinusButton({setCounter, decrementCounter}) {
  return (
    <button onClick={decrementCounter}>-</button>
    // <button onClick={() => {
    //   // 화살표 함수의 코드가 한줄일 경우 중괄호와 return 생략가능
    //   setCounter((prev) => prev - 1)
    // }}>
    //   -
    // </button>
  )
}

function Count ({counter}) {
  return <div>Counter : {counter}</div>
}


// 클래스형 컴포넌트
// class ClassApp extends Component {
//   state = {counter: 1}
//   // 클래스형 this키워드 사용으로 setState를 그냥 내려주면 디스가 꼬이는 문제 발생
//   // 부모 컴포넌트에서 상태변경 함수를 만들어서 내려줘야 한다(화살표 함수를 사용하면 this가 꼬이지 않는다.)
//   incrementCounter = () => {
//     this.setState ({counter: this.state.counter + 1})
//     }
//     decrementCounter = () => {
//     this.setState ({counter: this.state.counter - 1})
//     }
//   render() {
//     return (
//       <>
//       <Count counter={this.state.counter} />
//       <PlusButton incrementCounter={this.incrementCounter}/>
//       <MinusButton decrementCounter={this.decrementCounter}/>
//       </>
//     )
//   }
// }

// class PlusButton extends Component {
//   render(){
//     return (
//       <button onClick={this.props.incrementCounter}>+</button>
//     )
//   }
// }
// class MinusButton extends Component {
//   render(){
//     return(
//       <button onClick={this.props.decrementCounter}>-</button>
//     )
//   }
// }


// class Count extends Component {
//   // constructor(props){  // constructor 작성해주지 않아도 기본 
//   //   super(props);}   // constructor를 받아와서 프롭스를 받아와서 실행시켜준다.
//   render(){
//     return <div>counter {this.props.counter}</div>
//   }
// }


export default FunctionApp;
//export default ClassApp
