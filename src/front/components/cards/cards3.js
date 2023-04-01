import React, { Component } from "react";
import Slider from "react-slick";
import "./cards3.css"
import zurag from "../img/288996487_563880975464288_471155423746522146_n 1 (1).png"

const Cards3 =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return(
        <div className="cards3-container">
            <div className="cards3-garchig">
                <h3>Бэлэн худалдаалж байгаа бүтээгдэхүүн</h3>
            </div>
            <Slider className="slider1"{...settings}>
                <div className="cards3-box">
                    <img src={zurag} alt="/"/>
                </div>
                <div className="cards3-box">
                    <img src={zurag} alt="/"/>
                </div>
                <div className="cards3-box">
                    <img src={zurag} alt="/"/>
                </div>
                <div className="cards3-box">
                    <img src={zurag} alt="/"/>
                </div>
                <div className="cards3-box">
                    <img src={zurag} alt="/"/>
                </div>
            </Slider>
        </div>
    )
}
export default Cards3