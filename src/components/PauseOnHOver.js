import React, { Component } from "react";
import Slider from "react-slick";
import "../css/PauseOnHover.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
        <div>
        <h2>&nbsp;ROOM&nbsp;</h2>
        <Slider {...settings}>
          <div>
          <div className="room">
              <div className="warp">
                <div className="room1">
                  <img src="img/room1.jpg" alt="room1" />
                </div>
                <h3>스위트 룸</h3>
              </div>
            </div>
          </div>
          <div>
          <div className="room">
              <div className="warp">
                <div className="room1">
                  <img src="img/room2.jpg" alt="room1" />
                </div>
                <h3>패밀리 룸</h3>
              </div>
            </div>
          </div>
          <div>
          <div className="room">
              <div className="warp">
                <div className="room1">
                  <img src="img/room3.jpg" alt="room1" />
                </div>
                <h3>싱글 룸</h3>
              </div>
            </div>
          </div>
          <div>
          <div className="room">
              <div className="warp">
                <div className="room1">
                  <img src="img/room4.jpg" alt="room1" />
                </div>
                <h3>더블 룸</h3>
              </div>
            </div>
          </div>
          <div className="room">
              <div className="warp">
                <div className="room1">
                  <img src="img/room5.jpg" alt="room1" />
                </div>
                <h3>스텐다드 룸</h3>
              </div>
            </div>
        </Slider>
      </div>
    );
  }
}