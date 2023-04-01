import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsTag, BsFillGridFill, BsBox, BsCardImage } from "react-icons/bs";
import { BiExit } from "react-icons/bi";

import { Link } from "react-router-dom";
import "./sidebar.css"

 const Sidebar =()=>{
    return(
    <div className="Sidebar_Container">
      <nav className="Sidebar_Menu">
      <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsCardImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/dashboard"}>Dashboard</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsCardImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/slider"}>Slider</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsCardImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/category"}>Category</Link>
            </span>
          </span>
        </div>
       
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsCardImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/subcategory"}>Subcategory</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsCardImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/product"}>Product</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsCardImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/brand"}>Brand</Link>
            </span>
          </span>
        </div>

       
      </nav>
    </div>
    )
 }

 export default Sidebar



