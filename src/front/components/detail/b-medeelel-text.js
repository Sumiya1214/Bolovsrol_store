import React from "react";
import "./b-medeelel-text.css"
import zurag from "../img/download (1) 1.png"

const Bmedeeleltext =()=>{
    return(
        <div>
            <div className="b-text-une">
                <div className="b-hymdarsan-une">
                    <div className="hymdarsan-une-box1">
                        <p className="hymdarsan-une-box1-1">Хямдарсан үнэ</p>
                    </div>
                    <div className="hymdarsan-une-box2">
                        <div className="hymdarsan-une-box2-1">
                            <p>155,000₮</p>
                        </div>
                        <div className="hymdarsan-une-box2-2">
                            <p>-30.00%</p>
                        </div>
                    </div>
                    <div className="hymdarsan-une-box3">
                        <p>хэмнэлт:</p>
                        <p>55,000₮</p>
                    </div>
                    
                </div>
                <div className="b-anhnii-une">
                    <p className="b-anhnii-une1">Анхны үнэ</p>
                    <p className="b-anhnii-une2">210,000₮</p>
                </div>
            </div>
            <div className="b-text-sags">
                <div className="text-sags1">
                    <div className="text-sags-1">
                        <div className="sags1-too-shirheg">
                            <div className="too-shirheg">
                                <p>Тоо ширхэг</p>
                            </div>
                            <input className="too-input" type={"number"}/>
                        </div>
                        <div className="sags1-shirheg-belen">
                            <p>12 - ширхэг бэлэн байна</p>
                        </div>
                    </div>   
                </div>
                <div className="text-sags2">
                    <div className="sagsand-nemeh">
                        <p>сагсанд нэмэх</p>
                    </div>
                    <div className="hudaldan-avah">
                        <p>худалдан авах</p>
                    </div>
                </div>
            </div>
            <div className="b-text-tulult">
                <div className="shuud-tulult">
                    <div className="shuud-tulult-img">
                        <img src={zurag} alt="/"/>
                    </div>
                    <div className="shuud-tulult-text">
                        <div>
                            <p className="shuud-tulult-text1">Шууд төлөлт</p>
                            <p className="shuud-tulult-text2">Qpay</p>
                        </div>
                        <div className="huugui-shimtgelgui">
                            <div className="huugui">
                                <p className="huugui-p">Хүүгүй</p>
                            </div>
                            <div className="shimtgelgui">
                                <p className="shimtgelgui-p">Шимтгэлгүй</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shuud-tulult">
                    <div className="shuud-tulult-img">
                        <img src={zurag} alt="/"/>
                    </div>
                    <div className="shuud-tulult-text">
                        <div>
                            <p className="shuud-tulult-text1">Шууд төлөлт</p>
                            <p className="shuud-tulult-text2">Qpay</p>
                        </div>
                        <div className="huugui-shimtgelgui">
                            <div className="huugui">
                                <p className="huugui-p">Хүүгүй</p>
                            </div>
                            <div className="shimtgelgui">
                                <p className="shimtgelgui-p">Шимтгэлгүй</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Bmedeeleltext