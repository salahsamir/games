import React, { useState } from 'react'
import axios from "axios";
import style from './sort.module.css';
import { Link } from 'react-router-dom';
export default function Alph() {
  let [list,setlist]=useState([])
  let [num,setnum]=useState(20);
  let [loading,setloading]=useState(false)
  
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by': 'alphabetical'},
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

  return (
    <>
 {loading?
<>
<div className="row my-4">
    {list.map((ele,index)=>
    <div key={index} className="col-md-3 ">
      <Link className='nav-link'  to={`/detail/${ele.id}`}>
      <div className={`${style.inner} border border-2 border-dark my-3`}>
        <img src={ele.thumbnail} className="img-fluid" alt="" />
        <div className='my-2 p-2'>
        {/* <p className='float-start'>  {ele.title}</p> */}
      <p className='float-start fs-5 text-white-50 fw-bold'>  {ele.title.split('').slice(0,10)}</p>

        <button className='btn btn-primary float-end'>free</button>
        <div className='clearfix'></div>
        <p className='text-muted'>  {ele.short_description.split('').slice(0,25)}...</p>
        <div className='d-flex justify-content-between'>
      <i _ngcontent-fip-c7="" class="fas fa-plus-square"></i>
     
      </div>
   
        
        </div>
      </div>
      
      
      </Link>
    </div>
    
    
    
    )}
   
    </div>
    <div className='d-flex justify-content-center'>
   <button onClick={click} className='border border-1  btn btn-transperant my-5  text-muted py-2 rounded-2'>More Games ></button>
   
    </div>
     

</>
  :   
<div className='d-flex justify-content-center my-5'>

<i className='fas fa-spinner fa-spin fa-6x text-white'></i>


</div>


}
  
  
  
  </>
  )
}
