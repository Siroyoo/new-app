import React from "react";
import "../css/home.css"
import PauseOnHover from "../components/PauseOnHOver";


export default function Home() {

  return (
    <div>
      <section className="backimg">
          <img src="img/background.jpg" alt="배경" />
      </section>
      <section className="home-con">
        <PauseOnHover/>
      </section>
      <section className="Facility">
        
      </section>
    </div>
  );
}
