import React, { useContext } from 'react'
import { counterContext1 } from '../catContext/Context2'
import style from './cat.module.css';
import { Link } from 'react-router-dom';
export default function Open() {
  let {list,loading,click,setname}=useContext(counterContext1);
  setname('open-world')
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
        <div className='d-flex justify-content-cenetr'>
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
