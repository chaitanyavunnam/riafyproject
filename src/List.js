import React, { useState } from "react";
import './App.css';
export default function List(props) {
    
    const updataClicked=()=>{
       props.clickHandler(props.item)
    }
    return (
         <>
            <div className="item" onClick={updataClicked} >
                {props.item}
            </div>
            </>
      
    )
   
}