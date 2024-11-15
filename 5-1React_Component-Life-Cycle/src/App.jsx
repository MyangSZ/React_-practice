import { Component, useState } from 'react'
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

class Counter extends Component {
  constructor() {
    super();
    this.state ={ counter: 1}
    console.log('constructor')
  }

componentDidMount() {
  console.log("DidMount")
}
componentDidUpdate() {
  console.log("DidUpdate")
}
componentWillUnmount() {
  console.log("Willunmount")
}

  render() {
    console.log("render")
    return (
    <>
    <div> counter : { this.state.counter }</div>
    <button 
    onClick={() => this.setState({
      counter: this.state.counter + 1 })}
      >
      +1</button>
      {/* 버튼을 눌렀을 때 +1이 되도록 한다. */}
    </>)
  }
}

export default App
