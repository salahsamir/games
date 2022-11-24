import axios from 'axios'
import React, {  useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import style from './home.module.css';
import { useNavigate } from 'react-router-dom'

export default function Home() {
let [array,setarray]=useState([]);
let navigate=useNavigate()

  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: { 'sort-by': 'popularity'},
    headers: {
      'X-RapidAPI-Key': 'ce37107104msh7ac783fb8207ff1p190388jsn8ebcceb167e1',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    setarray(response.data.slice(0,3))
  })
  let click=()=>{
    navigate(`/browser`);
    
  }

  return (
    <>
   <div className="container ">
    <div className=' position-relative'>
    <img src="img/1.png" className='w-100 h-25' alt="" />
    </div>
    <div className={`${style.content} text-white-50 text-center  position-absolute `}>
      <h2 className={`${style.textsize}`}>Find & track the best <span className='text-primary'>free-to-play</span> games!</h2>
      <p className='text-muted my-4'>Track what you've played and search for what to play next! Plus get free premium loot!</p>

<button className='text-muted p-2 border border-1 border-muted rounded-2 bg-transparent' onClick={click}>Browser Games</button>

    </div>
  
  <div className='my-3'>
  <h3><i _ngcontent-fip-c8="" class="fas fa-robot mr-2 mx-1"></i>Personalized Recommendations</h3>
  

  <div className="row my-4">
    {array.map((ele,index)=>
    <div key={index} className="col-md-4 ">
      <Link className='nav-link'  to={`/detail/${ele.id}`}>
      <div className={`${style.inner} border border-2 border-dark my-3`}>
        <img src={ele.thumbnail} className="img-fluid" alt="" />
        <div className='my-2 p-2'>
        <p className='float-start'>  {ele.title}</p>
        <button className='btn btn-primary float-end'>free</button>
        <div className='clearfix'></div>
        <p className='text-muted'>  {ele.short_description.split('').slice(0,25)}...</p>
   
        
        </div>
      </div>
      
      
      </Link>
    </div>
    
    
    
    )}
   
    </div>



  </div>



  </div>
 
    
    
    </>
  )
}
