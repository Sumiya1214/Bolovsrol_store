import React from "react";
import "./header.css"
import zurag from "../img/logo 1.png"
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsArrowRightSquare } from "react-icons/bs";


const Header =()=>{
    return(
        <div className="header-container">
            <div className="z-1">
                <div className="z-2">
                    <div className="z-3"></div>
                </div>
            </div>

            <div className="a-container">
                <div className="a-1">
                    <p className="text-1">Боловсрол сторе д тавтай морил</p>
                    <div className="shugam"></div>
                </div>
                <div className="a-2">
                    <div className="logo">
                        <img src={zurag} alt="/"/>
                    </div>
                    <div className="search">
                        <div className="search-1">
                            <div className="icon"><HiOutlineSearch/></div> 
                            <input className="input1" type={"search"} placeholder={"Хайлт жишээ нь: Цамц, apple г.м"}></input>
                            <button className="button1">хайх</button>
                        </div>
                    </div>
                </div>
                <div className="a-3">
                    <div className="holboosuud">
                        <Link> 
                            <div className="angilal">
                                <HiOutlineMenuAlt2/>
                                <p className="p-2">Ангилал</p>
                            </div>
                        </Link>
                        <div className="linkuud">
                            <Link><p className="p-1">Сургалтын хэрэглэгдэхүүн</p></Link>
                            <Link><p className="p-1">Сурагчийн ширээ сандал</p></Link>
                            <Link><p className="p-1">Оффис тавилга</p></Link>
                            <Link className="sum"><p className="p-1">Бусад цэс...</p><div><BsArrowRightSquare className="text-[11px] text-white mt-1.5"/></div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="b-container">
                <div className="b-1">
                    <div className="b-1-1">
                        <div className="b-box">
                            <FaPhoneAlt className="text-lg"/>
                            <p>7272-1313</p>
                        </div>
                        <div className="b-box">
                            <IoIosMail className="text-2xl"/> 
                            <p>batbolovsrolinur@gmail.com</p>
                        </div>
                        <div className="b-box">
                            <Link><FaFacebookF/></Link>
                            <Link><AiFillInstagram/></Link>
                            <Link><AiFillYoutube/></Link>
                        </div>
                    </div>
                </div>
                <div className="shugam2"></div>
                <div className="b-2">
                    <div className="b-2-1">
                        <Link><p>Хэрэглэгчийн булан</p></Link>
                        <div className="bosoo-zuraas"></div>
                        <div className="menu">
                            <Link>
                                <div className="menu-1">
                                    <BsCart3/>
                                    <p>сагс</p>
                                </div>
                            </Link>
                            <Link>
                                <div className="menu-2">
                                    <IoPricetagOutline className="ml-1"/>
                                    <p>брэнд</p>
                                </div>
                            </Link>
                            <Link>
                                <div className="menu-3">
                                    <FaRegHeart className="ml-4"/>
                                    <p>хадгалсан</p>
                                </div>
                            </Link>
                            <Link>
                                <div className="menu-4">
                                    <AiOutlineUser className="ml-2"/>
                                    <p>нэвтрэх</p>
                                </div>
                            </Link>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header