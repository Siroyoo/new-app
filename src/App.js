// 리액트의 사용하는 이유는 모든 파일을 컴퍼넌트 할 수 있음
// 나눈 애들을 재사용 할 수 있어서 사용함
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reserve_check from "./pages/Reserve_check";
import Join from "./pages/Join";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="continer">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/reserve_check" exact element={<Reserve_check />} />
            <Route path="/join" exact element={<Join />} />
            {/* <Route path="/menu" exact element={<Menu />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
