import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="navbar">
      <Link to="/login">
        <button>로그인</button>
      </Link>
      <Link to="/join">
        <button>회원가입</button>
      </Link>
      <Link to="/reserve_check">
        <button>예약조회</button>
      </Link>
      </div>
      <div className="logo">
        <Link to="/" style={{textDecorationLine:"none"}}>
          <h1>Nest Hotel</h1>
        </Link>
      </div>
      <div >
          <ul className="content">
            <Link to="/test"style={{textDecorationLine:"none"}}>
              <li>HOTLE</li>
            </Link>
            <Link to="/test"style={{textDecorationLine:"none"}}>
              <li>RESERVATION</li>
            </Link>
            <Link to="/test"style={{textDecorationLine:"none"}}>
              <li>ROOM</li>
            </Link>
            <Link to="/test"style={{textDecorationLine:"none"}}>
              <li>FACILITY</li>
            </Link>
          </ul>
      </div>
    </header>
   
  );
}

// Link , useNavigate
