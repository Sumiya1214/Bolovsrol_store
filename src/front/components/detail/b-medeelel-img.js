import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "../img/319178963_506412854799658_128971406391625491_n 2.png";
import "./b-medeelel-img.css"
import zurag from "../img/a-02 1.png"
import zurag1 from "../img//319178963_506412854799658_128971406391625491_n 2.png"
import zurag2 from "../img/319178963_506412854799658_128971406391625491_n 1 (4).png"


const Bmedeelelimg =()=>{
    const settings = {
        
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div>
            <div className="b-img-text">
                <img src={zurag} alt="/"/>
                <h1>Нэг давхар эвхдэг ор</h1>
            </div>
            <Slider {...settings}>
                <div className="b-img">
                    <img src={zurag1} alt="/"/>
                </div>
                <div className="b-img">
                    <img src={zurag1} alt="/"/>
                </div>
            </Slider>
            
        </div>  
    )
}
export default Bmedeelelimg