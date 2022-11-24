import React, { useState } from 'react'
import style from './login.module.css'
import axios from 'axios'
import Joi from 'joi'

import { useNavigate } from 'react-router-dom'

export default function Login({savedata}) {
  let [loading,setloading]=useState(false)
  ////api error
let [errorapi,setarrorapi]=useState('')
/////to take copy from hook useNavigate
let navigate=useNavigate()
let navigatejoin=useNavigate()

  //// variable to save data on it
  let [inputdata,setinputdata]=useState({

"email":"",
"password":"",


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
  let {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signin`,inputdata);
  // console.log(data.message);
  if(data.message==='success'){
    setloading(false);
    localStorage.setItem('token',data.token);
    savedata()
    navigate(`/home`);
   
  }else{
    setloading(false)

    setarrorapi('inputs not valid');


  }

}
let vlidjoi=()=>{
  const schema = Joi.object({

    email:Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      });
      return schema.validate(inputdata,{abortEarly:false})
}

////function to submit 
  let submitform=(e)=>{
    e.preventDefault();////to agnore reload
    setloading(true)
checkinput()
    let valid=vlidjoi()
    // console.log(valid);
    if(valid.error){
setjoierror(valid.error.details)
setloading(false)

    }
    else{
checkinput();
setjoierror([])
// setloading(false)


    };
  }
  function join(){
    navigatejoin('/join')
  }
  function forget(){
    alert("اعملك ايه يا عسل")
  }
  return (
    <>
    
    <div className="container mt-5">
      <div className="row border border-1 border-dark ">
        <div className="col-md-6 py-4 ">
          <img src="img/image.jpg"  className='w-100 h-100' />
        </div>
        <div className="col-md-6 py-4 text-center ">
          <img src="img\logo.png" className='w-25' />
          <h3 className='text-muted my-3'>Log in to GameOver</h3>
       
          
          <form onSubmit={submitform}>

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
            {errorapi?<p className='alert alert-danger p-2 my-3'>{errorapi}</p>:''}

          
<button type='submit' className='form-control bg-dark border border-1 border-dark my-2 text-white py-2'>
{loading==true?
            <i className='fas fa-spinner fa-spin text-white'></i>:"Login"
            }
</button>

<div className={`${style.brdbottom}  m-auto`}></div>



          </form>
          
<button className='border border-0 bg-transparent text-primary  my-2' onClick={forget} >Forgot Password?</button>
<p className='text-muted'>Not a member yet?<span><button className='border border-0 bg-transparent text-primary' onClick={join} >Create Account  </button></span> </p>

        </div>
      </div>
    </div>
    
    
    </>
  )
}
