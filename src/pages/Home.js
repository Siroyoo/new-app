import React from "react";
import "../css/home.css"
import PauseOnHover from "../components/PauseOnHOver";
import Facility from "../components/Facility";
import Reservecom from "../components/Reservecom";


export default function Home() {
  return (
    <div>
      <section className="backimg">
          <img src="img/background.jpg" alt="배경" />
      </section>
      <section className="reserve-bar">
        <Reservecom/>
      </section>
      <section className="home-con">
        <PauseOnHover/>
      </section>
      <section className="Facility">
        <Facility/>
      </section>
    </div>
  );
}
