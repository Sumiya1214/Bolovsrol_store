import "./banner.css"
import React, { Component } from "react";
import Slider from "react-slick";
import zurag from "../img/288996487_563880975464288_471155423746522146_n 1.png"


const Banner =()=>{
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="banner">
            <div className="banner-container">
                <Slider {...settings}>
                    <div className="banner-1">
                        <img src={zurag} alt="/"/>      
                    </div>
                    <div className="banner-1">
                        <img src={zurag} alt="/"/>      
                    </div>
                    <div className="banner-1">
                        <img src={zurag} alt="/"/>      
                    </div> 
                </Slider>
            </div>
        </div> 
    )
}
export default Banner