
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Join from './join/Join';
import Layout from './Layout/Layout';
import Login from './login/Login';
import Alph from './Sort/Alph';
import Popularity from './Sort/Popularity';
import Release from './Sort/Release';
import Relevance from './Sort/Relevance';

import Action from './cat/Action';
import ActionRpg from './cat/ActionRpg';
import Fantasy from './cat/Fantasy';
import Open from './cat/Open';
import Racing from './cat/Racing';
import Shooter from './cat/Shooter';
// import Socail from './cat/Socail';
import Sports from './cat/Sports';
import Zombie from './cat/Zombie';
import Socail from './cat/Socail';



import Browser from './browser/Browser';
import All from './all/All';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Profile from './Profile/Profile';
import Protect from './Protect/Protect';
import Details from './detail/Details';

import Pc from './Pc/Pc';



function App() {
  let [userData,setuserData]=useState(null)
  let savedata=()=>{
    let encoded=localStorage.getItem('token');
    let decode=jwtDecode(encoded)
    setuserData(decode);
    
  }
  useEffect(()=>{
if(userData){
  savedata()
}

  },[])


  let logout=()=>{
    localStorage.removeItem('token');
    setuserData(null);
    <Navigate to='login'> </Navigate>
  }


  let routes=createBrowserRouter([
    {path:'/',element:<Layout userData={userData} logout={logout}/>,children:[
      {path:'home',element:<Protect userData={userData} ><Home/></Protect>},
      {index:true,element:<Login savedata={savedata} />},
      {path:'login',element:<Login savedata={savedata}/>},
      {path:'all',element:<Protect userData={userData} ><All/></Protect>},
      {path:'profile',element:<Protect userData={userData}><Profile userData={userData}/></Protect>},
      {path:'detail/:id',element:<Protect userData={userData}><Details/></Protect>},
      {path:'browser',element:<Protect userData={userData}><Browser/></Protect>},
      {path:'pc',element:<Protect userData={userData}><Pc/></Protect>},
      {path:'alph',element:<Protect userData={userData}><Alph/></Protect>},
      {path:'re',element:<Protect userData={userData}><Relevance/></Protect>},
      {path:'rel',element:<Protect userData={userData}><Release/></Protect>},
      {path:'po',element:<Protect userData={userData}><Popularity/></Protect>},
      {path:'action-rpg',element:<Protect userData={userData}><ActionRpg/></Protect>},
      {path:'action',element:<Protect userData={userData}><Action/></Protect>},
      {path:'fantasy',element:<Protect userData={userData}><Fantasy/></Protect>},
      {path:'open-world',element:<Protect userData={userData}><Open/></Protect>},
      {path:'racing',element:<Protect userData={userData}><Racing/></Protect>},
      {path:'shooter',element:<Protect userData={userData}><Shooter/></Protect>},
      {path:'socail',element:<Protect userData={userData}><Socail/></Protect>},
      {path:'sports',element:<Protect userData={userData}><Sports/></Protect>},
      {path:'zombie',element:<Protect userData={userData}><Zombie/></Protect>},


      
    
      {path:'join',element:<Join/>},

    ]}
  ])
  return (
  <>
 
  
  <RouterProvider router={routes}/>
  
  

  </>
  );
}

export default App;
