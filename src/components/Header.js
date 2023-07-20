import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/blogs">
        <button>blog</button>
      </Link>
      {/* <Link to="/menu">
        <button>menu</button>
      </Link> */}
    </div>
  );
}

// Link , useNavigate
