import React from "react";
import Sidebar from "../../sidebar/sidebar";
import Categorytables from "../../Tables/category_tables/category_tables";

const Category = ()=> {
    return (
        <div className="w-full">
           <div className="p-[10px] m-auto">
                <div className="flex">
                    <div className="w-[300px] h-screen">
                        <Sidebar/>
                    </div>
                    <div className="w-full ml-[5px] bg-[#FAF8F8]">
                        <Categorytables/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Category