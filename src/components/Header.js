import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="navbar">
      <Link to="/">
        <button>로그인</button>
      </Link>
      <Link to="/join">
        <button>회원가입</button>
      </Link>
      <Link to="/reserve_check">
        <button>예약조회</button>
      </Link>
      </div>
      <div className="content">
          <ul>
            <Link to="/test">
              <li>text</li>
            </Link>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ul>
      </div>
    </div>
   
  );
}

// Link , useNavigate
