import React from "react";
import Api from "./img.json";

function Gradient() {
    console.log(Api);
  return (
    <>
    <div className=" bg-gradient-to-r from-[#00BCDD00]  to-[#00BCDD]  w-full h-[550px] p-10 mt-10 mx-auto ">
      <div className="w-full"> <h1>Top catogories</h1></div> 
    <div className=" flex flex-row flex-wrap gap-y-20 gap-x-5 mt-10 justify-center py-20">
      {Api.map((item) => {
        return(
            <div className="min-w-[250px] flex flex-row justify-center">
       <div className="bg-[#1FC3E0] w-14 h-14 flex flx-row justify-center items-center rounded-full "> <img src={item} alt="hello" className=""  />
       </div>
       </div>
     ) })}
    </div>
    </div>
    </>
  );
}

export default Gradient;
