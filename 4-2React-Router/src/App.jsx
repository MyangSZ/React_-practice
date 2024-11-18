import { useState } from "react";
import "./App.css";
import { Link, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  // navigate에 어떤 인자를 전달하냐에 따라 특정 주소 이동, 앞으로 뒤로 이동
  const location = useLocation()
  
  return (
  <>
  <div>
  {/* <Link to ="/main">메인</Link>
  <Link to ="/mypage">마이페이지</Link>
  <Link to ="/test">테스트</Link> */}
  <div>
  <button onClick={() => navigate("/main")}>메인</button>
  <button onClick={() => navigate("/mypage")}>마이페이지</button>
  <button onClick={() => navigate("/test")}>테스트</button>
  </div>
  <div>
    <button onClick={() => navigate(1)}>{`앞으로가기`}</button>
    <button onClick={() => navigate(-1)}>{`뒤로가기`}</button>
  </div>
  </div>

  <Routes>
    <Route path="/main" element={<Main/>}/>
    <Route path="/mypage" element={<div>마이 페이지</div>}/>
    <Route path="/test" element={<div>테스트 페이지</div>}/>
  </Routes>
  </>
)}

function Main() {
  const params = useParams()
  console.log(params.name)

  const location = useLocation()
  console.log(location.search)

  const [searchParams, setSearchParams] = useSearchParams() 
  // 두개의 결과물을 배열로 가져온다. 어떤값을 가져올것인지 이름을 찍어서 가져 올 수 있다.
  console.log (searchParams.get("name"))
  console.log (searchParams.get("study"))

  return (
    <div>메인 페이지</div>
  )
}


export default App;