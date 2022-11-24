import { createContext, useState } from "react";
// import React, { useState } from 'react'
import axios from "axios";

 export let counterContext1= createContext(0);
 function CounterContext1Provider (props){
    let [list,setlist]=useState([])
    let [num,setnum]=useState(20);
    let [loading,setloading]=useState(false)
    let [name,setname]=useState('')
    
  const options  = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {category:name },
    headers: {
      'X-RapidAPI-Key': 'ce37107104msh7ac783fb8207ff1p190388jsn8ebcceb167e1',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    setlist(response.data);
    setloading(true)
  
  }).catch(function (error) {
      console.error(error);
  });
  list=list.slice(0,num)
  let click=()=>{
    setnum(num+20)
    list=list.slice(0,num)
  }
   
    return <counterContext1.Provider value={{list,loading,click,setname}} >

{props.children}

    </counterContext1.Provider>
 }

 export default CounterContext1Provider