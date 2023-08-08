import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return(
    <footer>
      <div className="f-logo">
        <Link to="/" style={{textDecorationLine:"none"}}>
          <h1>
            Nest Hotel
          </h1>
        </Link>
        <div className="f-con">
          <ul>
            <li>
              <p>대표번호 : </p>
              <p>&nbsp;1515 - 1515</p>
            </li>
            <li>
              <p>고객상담 : </p>
              <p>&nbsp;1515 - 1516</p>
            </li>
            
          </ul>
          <ul>
            <li>
              <p>예약메일 : </p>
              <p>&nbsp;nestreserve@naver.com</p>
            </li>
            <li>
              <p>메일문의 : </p>
              <p>&nbsp;nestservise@naver.com</p>
            </li>
          </ul>
      </div>
      </div>
      
    </footer>
  );
}
