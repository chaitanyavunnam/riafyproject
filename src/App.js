import './App.css';
import React, { useState } from "react";
import List from "./List";
import Ratios from "./Ratios";
import file from "./data.js";

function App() {  
  let list=[];
  let database={
   
  }

 
  file.map((key)=>(
    list.push(key.name)
  ))

  const [searchList,setSearchList]=useState([]);
  const [data,setData]=useState("");
  const [clicked,setClicked]=useState(false);
  const [selectedCompany,setSelectedCompany]=useState("");
  const clickHandler=(comapny)=>{
    setSelectedCompany(comapny);
      setClicked(true);
      file.map((key)=>{
        if(key.name===comapny){
          console.log("hii");
          database=key;
        }
      })
      console.log(comapny);
      console.log(database);
  }
  const updateList=(e)=>{
    setClicked(false)
    setData(e.target.value);
    if(e.target.value!==""){
     let x= list.filter(item=>{
        let lc = item.toLowerCase();
        let filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      })
      // searchList=x;
      setSearchList([...x]);
    }
    else{
      setSearchList([]);
    }
  }
  return (
    <div className="App">
      <header >
        <h1 style={{color: "green"}}>National Stock Exchange</h1>
        <h3>Enter company name below to get the ratios</h3>
        <input type="text"
                           placeholder="Search here" 
                           className="search" value={data} onChange={updateList} />
       
      </header>
      {clicked ? (
        <Ratios company={selectedCompany} database={file} />
      ) : ( <div className="lists">
        {
          searchList.map((key,indx)=>(
            <List item={key} key={indx}  clickHandler={clickHandler}  />
          ))
        }
      </div>)}
     
    </div>
  );
}

export default App;
