import React, { useState } from 'react'
import style from './join.module.css'
import axios from 'axios'
import Joi from 'joi'

import { useNavigate } from 'react-router-dom'

export default function Join() {
  let [loading,setloading]=useState(false)
  ////api error
let [errorapi,setarrorapi]=useState('')
/////to take copy from hook useNavigate
let navigate=useNavigate()
let navigate1=useNavigate()



  //// variable to save data on it
  let [inputdata,setinputdata]=useState({
  "first_name":"",
"last_name":"",
"email":"",
"password":"",
"age":""

  })
  let[joierror,setjoierror]=useState([])
  /////function to get data from input to send >>>api
let getinputdata=(e)=>{
  let user={...inputdata};
  user[e.target.id]=e.target.value;
  setinputdata(user);
  // console.log(user);

}
////function to check input
let checkinput=async()=>{
  let {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signup`,inputdata);
  // console.log(data.message);
  if(data.message==='success'){
    navigate(`/login`)
    setloading(false)
   
  }else{
    setloading(false)

    setarrorapi('Email already registered');

  }

}
let vlidjoi=()=>{
  const schema = Joi.object({
    first_name: Joi.string().alphanum().min(3).max(30).required(),
    last_name:Joi.string().alphanum().min(3).max(30).required(),
    age:Joi.number().min(20).max(80).required(),
    email:Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      
      });
      return schema.validate(inputdata,{abortEarly:false})
}

////function to submit 
  let submitform=(e)=>{
    e.preventDefault();////to agnore reload
    setloading(true)

    let valid=vlidjoi()
    console.log(valid);
    if(valid.error){
setjoierror(valid.error.details)
setloading(false)

    }
    else{
checkinput();
// setloading(false)


    };
  }

  function login(){
    navigate1('/login')
  }
  return (
    <>
    
    <div className="container mt-5">
      <div className="row border border-1 border-dark ">
        <div className="col-md-6 py-4 ">
          <img src="img/image.jpg"  className='w-100 h-100' />
        </div>
        <div className="col-md-6 py-4 text-center ">
       
          <h2 className='text-muted'>
          Create My Account!
          </h2>
          <form onSubmit={submitform}>
           
          <div className='d-flex'>
          <div className={ ` ${style.namewidth } `}>
          <input type="text" onChange={getinputdata} className={ ` w-100 text-white form-control bg-dark border border-1 border-dark my-2 w-50  `} id='first_name' placeholder='frist name' />
          {joierror.filter((ele)=>ele.context.label=='first_name')[0]?
        <div className='alert alert-light text-start p-1 my-2'>
          
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='first_name')[0]?.message}
      
        </p></div>
     
     :''
        }

          </div>
          <div className={ ` ${style.namewidth } `}>
          <input type="text" onChange={getinputdata} className={ ` w-100 text-white form-control bg-dark border border-1 border-dark my-2 w-50  `} id='last_name' placeholder='last_name' />
          {joierror.filter((ele)=>ele.context.label=='last_name')[0]?
        <div className='alert alert-light text-start p-1 my-2'>
          
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='last_name')[0]?.message}
      
        </p></div>
     
     :''
        }

          </div>
          </div>
            <input type="text" onChange={getinputdata} className='form-control  text-white bg-dark border border-1 border-dark my-2' id='email' placeholder='email' />
            {joierror.filter((ele)=>ele.context.label=='email')[0]?
        
        <div className='alert alert-light text-start p-1 my-2'>
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='email')[0]?.message}
      
        </p>
        </div>
     
     :''
        }
            <input type="text" onChange={getinputdata} className='form-control text-white bg-dark border border-1 border-dark my-2' id='password' placeholder='password' />
            {joierror.filter((ele)=>ele.context.label=='password')[0]?
        
        <div className='alert alert-light text-start p-1 my-2'>
          
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='password')[0]?.message}
      
        </p></div>
     
     :''
        }
            <input type="number" onChange={getinputdata}  className='form-control text-white bg-dark border border-1 border-dark my-2' id='age' placeholder='age' />
            {joierror.filter((ele)=>ele.context.label=='age')[0]?
        
          
        <div className='alert alert-light text-start p-1 my-2'>
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='age')[0]?.message}
      
        </p>
     
     </div>
     :''
        }
            {errorapi?<p className='alert alert-danger p-2 my-3'>{errorapi}</p>:''}
          
<button type='submit' className='form-control bg-dark border border-2 border-dark my-2 text-white py-2'>{loading==true?
            <i className='fas fa-spinner fa-spin'></i>:"Create Account"
            }</button>
<p className={`text-muted`}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
<div className={`${style.brdbottom}  m-auto`}></div>
<p className='my-2 text-muted'>Already a member? <button className='text-primary border border-0 bg-transparent' onClick={login}>Login></button>   </p>



          </form>

        </div>
      </div>
    </div>
    
    
    </>
  )
}
