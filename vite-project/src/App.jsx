
import './App.css'

// class App extends Component { 
   // Component - 리액트에서는 꼭 상속 받아와야 하는 클래스가 있다.
   // 미리 만들어 놓은 컴포넌트라는 클래스를 받아와서 사용해야 한다
//   render(){ //html형태의 코드를 리턴하
//     return <div>안녕하세요</div>
//   }
// }


// 함수형 컴퍼넌트

function App() {
  return (
<>
    <빵 />
    <패티 /> 
    <양상추 />
    <토마토 />
    <치즈 />
    <빵 />
</>

  )
}

function 빵() {
  return (
    <div className="빵">
    밀가루
    <span>물</span>
    <span>계란</span>
    <span>이스트</span>
    <span>물</span>
  </div>
  )
}
function 패티 (){
  return (
    <div className="패티">
      소고기
      <span>후추</span>
      <span>소금</span>
      </div>
  )
}
function 양상추 () {
  return(
    <div className="양상추">
    잎사귀
  <span>줄기</span>
  </div>
  )
}
function 토마토 () {
  return(
    <div className="토마토">
    껍질
  <span>과육</span>
  <span>씨앗</span>
  </div>
  )
}
function 치즈 (){
  return(
    <div className="치즈">
        우유
      <span>소금</span>
      <span>색소</span>
    </div>
  )
}



export default App
