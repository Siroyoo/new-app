import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../css/PauseOnHover.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


export default function  PauseOnHover() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    const [room, setroom] = useState([]);
    const getRoom = async () => {
      axios
        .get("http://localhost:8082/room")
        .then((res) => {
          setroom(res.data);
          console.log(res.data);
          console.log(res);
        })
        .catch((err)=> {
          console.log(err);
        });
    };
    useEffect(()=> {
      getRoom();
    }, []);
    console.log(room);
    
    return (
        <div>
        <h2>&nbsp;ROOM&nbsp;</h2>
        <Slider {...settings}>
          {room.map((ro, idx)=> (
            <div className="room" key={idx}>
            <div className="warp">
              <div className="room1">
              <img src={ro.img} alt="room1" />
              </div>
              <h3>{ro.name}</h3>
              </div>
          </div>
        ))}
        </Slider>
      </div>
    );
  }
