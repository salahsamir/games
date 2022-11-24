import React, { useEffect , useState } from 'react';
import axios from "axios";


import { Link, useParams } from 'react-router-dom';



export default function Details() {
let param=useParams();
let[item,setitem]=useState([]);
let [system,setsystem]=useState({});
let [loading,setloading]=useState(false);



let [imges,setimges]=useState([]);





const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id:`${param.id}`},
  headers: {
    'X-RapidAPI-Key': 'ce37107104msh7ac783fb8207ff1p190388jsn8ebcceb167e1',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
  setitem(response.data);

});

useEffect(()=>{
setsystem(item.minimum_system_requirements);
setimges(item.screenshots);
setloading(true)

},[item]);



  return (
  <>
  {loading?
<>
{item ?
  <div className="row my-5">
  <div className="col-md-4">
      <img src={item.thumbnail} className="w-100  " alt="" />
      <button className='btn btn-transperant text-white-50 border border-0 shadow my-3'>FREE</button>
      <a href={item.game_url} ><button className='btn btn-primary text-white border border-0 m-3 px-5 fw-bold '>PLAY NOW <i _ngcontent-fip-c6="" class="fas fa-sign-out-alt mx-1"></i> </button></a>

  </div>
  <div className="col-md-8">
    <h2 className='fw-bold'>{item.title}</h2>
    <h5 className='text-muted'>about {item.title}</h5>
    <p className='text-muted'>{item.description}</p>
    {system ?
   <>
    <h5>minimum_system_requirements</h5>
    
    <ul className='list-unstyled'>
    <li><h6> os : <span className='text-muted'>{system.os}</span></h6> </li>
    <li><h6> processor : <span className='text-muted'>{system.processor}</span></h6> </li>
    <li><h6> memory : <span className='text-muted'>{system.memory}</span></h6> </li>
    <li><h6> storage : <span className='text-muted'>{system.storage}</span></h6> </li>
    <li><h6> graphics : <span className='text-muted'>{system.graphics}</span></h6> </li>
  </ul>
   
   
   </>

  :'' 
  }

{imges ?
<>
<h2 className='text-muted'>Naruto Online Screenshots</h2>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imges[0].image} className="d-block w-100 h-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imges[1].image} className="d-block w-100 h-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imges[2].image} className="d-block w-100 h-50" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h2 className='text-muted my-2'>Additional Information</h2>
<div className="row gy-2 text-muted">
  <div className="col-md-4">
    <h5>title</h5>
    <p className='text-white-50'>{item.title}</p>

  </div>
  <div className="col-md-4">
    <h5>Developer</h5>
    <p className='text-white-50'>{item.developer}</p>

  </div>
  <div className="col-md-4">
    <h5>Publisher</h5>
    <p className='text-white-50'>{item.publisher}</p>

  </div>
  <div className="col-md-4">
    <h5>Release Date</h5>
    <p className='text-white-50'>{item.release_date
}</p>

  </div>
  <div className="col-md-4">
    <h5>Genre</h5>
    <p className='text-white-50'>{item.genre}</p>

  </div> <div className="col-md-4">
    <h5>Platform</h5>
    <p className='text-white-50'>{item.platform
}</p>

  </div>

</div>

</>
:" "







}
  </div>

</div>

:''
}

</>
:
<div className='d-flex justify-content-center my-5'>

<i className='fas fa-spinner fa-spin fa-6x text-white'></i>


</div>
  
}
  </>
  )
}
