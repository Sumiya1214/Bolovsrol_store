import React,{useEffect,useState} from "react";
import { Routes,Route,useNavigate } from "react-router-dom";
import Brand from "../../components/Views/Brand/Brand";
import Category from "../../components/Views/Category/Category";
import Slider from "../../components/Views/slider/slider";
import Dashboard from "../../components/Views/dashboard/dashboard";
import Subcategory from "../../components/Views/subcategory/subcategory";
import Product from "../../components/Views/product/product";
import "./admin.css"

const Admin =()=>{
    const navigate = useNavigate();
    const [pageTitle,setPageTitle] = useState("Нүүр хуудас");
    React.useEffect(()=>{
        switch(window.location.pathname) {
            case "/admin/brand":
            setPageTitle("Нүүр хуудас");
            break;
        }
        switch(window.location.pathname) {
            case "/admin/category":
            setPageTitle("Нүүр хуудас");
            break;
        }
        switch(window.location.pathname) {
            case "/admin/slider":
            setPageTitle("Нүүр хуудас");
            break;
        }
        switch(window.location.pathname) {
            case "/admin/dashboard":
            setPageTitle("Нүүр хуудас");
            break;
        }
        switch(window.location.pathname) {
            case "/admin/subcategory":
            setPageTitle("Нүүр хуудас");
            break;
        }
        switch(window.location.pathname) {
            case "/admin/product":
            setPageTitle("Нүүр хуудас");
            break;
        }

    })
    return(
      <div className="w-full h-screen">
            <Routes>
                <Route path="/brand" element={<Brand/>} />
                <Route path="/category" element={<Category/>} />
                <Route path="/slider" element={<Slider/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/subcategory" element={<Subcategory/>} />
                <Route path="/product" element={<Product/>} />

            </Routes>
      </div>
    )
}
export default Admin