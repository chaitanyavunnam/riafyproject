import React, { useState } from "react";
import './App.css';
export default function Ratios(props) {
    const database=props.database;
    let ratios;
    database.map((key)=>{
        if(key.name===props.company){
            ratios=key.ratios
        }
})
    console.log(props.company);

    return (
        <>
        <div>
              <h1>The ratios of {props.company} are below</h1>
        </div>
        <div className="ratios">
      
        <table r>
           <tr>
            <th>Type</th>
            <th>Value</th>
           </tr>
           <tr>
               <td>Market Cap</td>
               <td>Rs.{ratios.marketcap} Cr.</td>
           </tr>
           <tr>
               <td>Current Market Price of stock</td>
               <td>Rs.{ratios.currentPrice}</td>
           </tr>
           <tr>
               <td>Stock P/E</td>
               <td>{ratios.stock}</td>
           </tr>
           <tr>
               <td>Dividend Yield</td>
               <td>{ratios.dividendyield}%</td>
           </tr>
           <tr>
               <td>ROCE</td>
               <td>{ratios.roce}%</td>
           </tr>
           <tr>
               <td>ROE</td>
               <td>{ratios.roe}%</td>
           </tr>
           <tr>
               <td>Debt to equity</td>
               <td>{ratios.debttoequality}</td>
           </tr>
           <tr>
               <td>EPS</td>
               <td>Rs.{ratios.eps}</td>
           </tr>
           <tr>
               <td>Reserves</td>
               <td>{ratios.reserves}</td>
           </tr>
           <tr>
               <td>Debt</td>
               <td>Rs.{ratios.debt} Cr.</td>
           </tr>
           
        </table>


</div>
</>
         );
}