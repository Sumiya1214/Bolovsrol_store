import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./front/pages/home/home";
import Admin from "./admin/pages/Admin/admin";
import Detail from "./front/pages/detail/detail";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin/*" element={<Admin/>} />
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App