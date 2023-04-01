import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Cards1 from "../../components/cards/cards1";
import Cards2 from "../../components/cards/cards2";
import Cards3 from "../../components/cards/cards3";
import "./home.css"


const Home=()=> {
    return (
        <div className="bolovsrol">
            <Header/>
            <Banner/>
            <Cards1/>
            <Cards2/>
            <Cards3/>
            <Footer/>
             
        </div>
    )
}
export default Home;