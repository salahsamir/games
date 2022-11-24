import React from 'react'

export default function Profile({userData}) {
    console.log(userData);
  return (
<>

<div className="container m-5 p-5 d-flex justify-content-center align-items-center">
 <div className="content  shadow border border-1 w-50 ">
 <div className="row p-5">
    <div className="col-md-5">
        <img src="img/2.jpg" className='w-100' alt="" />

    </div>
    <div className="col-md-7">
        <ul className='fa-1x list-unstyled'>
            <li className='fs-5'>name: {userData.first_name} {userData.last_name }</li>
            <li className='py-2 my-2 fs-5'>email : {userData.email}</li>
            <li className='fs-5'>age : {userData.age}</li>
        </ul>
    
    </div>
 </div>
 </div>
    
</div>

</>
  )
}
