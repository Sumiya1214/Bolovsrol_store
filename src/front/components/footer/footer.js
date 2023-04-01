import React from "react";
import "./footer.css"
import zurag from "../img/footer2 1.png"
import zurag1 from "../img/logo 2.png"
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";


const Footer =()=>{
    return(
        <div className="footer-container">
            <div className="footer-img"> 
                <img src={zurag} alt="/"/>
            </div>
            <div className="footer-text">
                <div className="footer-text1">
                    <div className="footer-logo">
                        <img src={zurag1} alt="/" />
                    </div> 
                    <div className="footer-ontsgoihesguud">
                        <h3>Онцгой хэсгүүд</h3>
                        <ul>
                           <Link><li>Брэндүүд</li></Link>
                           <Link><li>Промо</li></Link>
                           <Link><li>Купон</li>  </Link>
                        </ul>
                    </div> 
                    <div className="footer-tuslamj">
                        <h3>Тусламж</h3>
                        <ul>
                            <Link><li>Нууцлалын баталгаа</li></Link>
                            <Link><li>Үйлчилгээний нөхцөл</li> </Link>
                            <Link><li>Түгээмэл асуулт хариулт</li> </Link> 
                        </ul>
                    </div> 
                    <div className="footer-hayag">
                        <h3>Хаяг :</h3>
                        <p>9D Avenue, 2nd khoroo, Bayangol District, Ulaanbaatar, Mongolia</p>    
                    </div> 
                </div>
                <div className="footer-text2">
                    <div className="amjilt">
                        <p className="amjiltweb">Amjilt Web Service</p>
                        <div className="zohiogchiin-erh">
                            <AiOutlineCopyright className=""/>
                            <p>2022-2023 Зохиогчийн эрх хамгаалагдсан</p>
                        </div>
                    </div>
                    <div className="amjilt2">
                        <div className="footer-holboos">
                            <div className="holboosuud2">
                                <p>Холбоосууд:</p>
                            </div>
                            <div className="footer-utasniidugaar">
                                <FaPhoneAlt className="text-lg"/>
                                <p>7272-1313</p>
                            </div>
                            <div className="footer-mailhayg">
                                <IoIosMail className="text-2xl"/> 
                                <p>batbolovsrolinur@gmail.com</p>
                            </div>
                            <div className="footer-icons">
                                <Link><FaFacebookF className="text-white"/></Link>
                                <Link><AiFillInstagram/></Link>
                                <Link><AiFillYoutube/></Link>
                            </div>
                        </div>
                        <div className="shugam3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer