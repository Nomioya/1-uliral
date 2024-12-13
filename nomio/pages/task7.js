import { useRouter } from "next/router";
import React, { useState } from "react";

export default function task7(){
    const router=useRouter();
return(
    <div className="h-screen w-screen bg-black">
        <div className="w-screen h-12 bg-black flex pt-8">
            
            <div className=" text-lg text-white ml-8  ">11b Nomindari</div>
            <div className="  ml-[1300px] text-lg text-white ">Buh hiisen taskuud</div>
        </div>
        <div className="h-screen w-screen bg-black
        ">
            <div className="flex space-x-8 pt-24 justify-center ">
            <button className="bg-gray-600 h-24 w-40 border-2 border-gray-500 hover:bg-gray-100  " onClick={()=>{router.push("task1");}} >Business card</button>
            <button className="bg-gray-600 h-24 w-40 border-2 border-gray-500 hover:bg-gray-100  " onClick={()=>{router.push("task2");}}>Change color</button>
            <button className="bg-gray-600 h-24 w-40 border-2 border-gray-500 hover:bg-gray-100  " onClick={()=>{router.push("task3");}}>Weather</button>
            <button className="bg-gray-600 h-24 w-40 border-2 border-gray-500 hover:bg-gray-100  " onClick={()=>{router.push("task4");}}>Search</button>
            <button className="bg-gray-600 h-24 w-40 border-2 border-gray-500 hover:bg-gray-100  " onClick={()=>{router.push("task5");}}>Grid</button>
            <button className="bg-gray-600 h-24 w-40 border-2 border-gray-500 hover:bg-gray-100  " onClick={()=>{router.push("task6");}}>Serach by name</button>
           
            </div>
            
        </div>
    </div>
);

}