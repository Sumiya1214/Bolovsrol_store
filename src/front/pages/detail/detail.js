import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./detail.css"
import Bmedeelelimg from "../../components/detail/b-medeelel-img";
import Bmedeeleltext from "../../components/detail/b-medeelel-text";

const Detail = () => {
    return (
        <div>
            <div>
                <Header/>      
            </div>
            <div className="buteegdehuun">
                <div className="buteegdehuunii-medeelel">
                    <div className="buteegdehuun-img-heseg">
                        <Bmedeelelimg/>
                    </div>
                    <div className="buteegdehuun-text-heseg">
                        <Bmedeeleltext/>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
          
        </div>
    )
}
export default Detail