import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar({userData,logout}) {




  return (
    <nav className="navbar navbar-expand-lg bg-dark-50 shadow navbar-dark ">
  <div className={`${style.text} container`}>
    <Link className="navbar-brand d-flex">
      <img src="img/logo.png" className={`${style.img} w-75`} />
      <h5 className={`${style.text} m-2 p-1`}>Game Over</h5>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active text-white" aria-current="page"to='home'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white"to='all'>All</Link>
      </li>
      
      <li class="nav-item dropdown text-white">
          <Link class="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            platform
          </Link>
          <ul class="dropdown-menu bg-light">
            <li><Link class="dropdown-item text-black" to='browser'>Browser</Link></li>
            <li><Link class="dropdown-item text-black" to='pc'>Pc</Link></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown text-black">
          <Link class="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort_by
          </Link>
          <ul class="dropdown-menu bg-light">
          <li><Link class="dropdown-item text-black" to='rel'>release-date</Link></li>

          <li><Link class="dropdown-item text-black" to='po'>Popularity</Link></li>

            <li><Link class="dropdown-item text-black" to='alph'>alphabetical</Link></li>
            <li><Link class="dropdown-item text-black" to='re'>relevance</Link></li>
            
          </ul>
        </li>
       
        <li class="nav-item dropdown text-black">
          <Link class="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </Link>
          <ul class="dropdown-menu bg-light">
          <li><Link class="dropdown-item text-black" to='racing'>racing</Link></li>

          <li><Link class="dropdown-item text-black" to='sports'>sports</Link></li>
          <li><Link class="dropdown-item text-black" to='socail'>social</Link></li>
            <li><Link class="dropdown-item text-black" to='shooter'>shooter</Link></li>
            <li><Link class="dropdown-item text-black" to='open-world'>open-world</Link></li>
            <li><Link class="dropdown-item text-black" to='zombie'>zombie</Link></li>
            <li><Link class="dropdown-item text-black" to='fantasy'>fantasy</Link></li>
            <li><Link class="dropdown-item text-black" to='action-rpg'>action-rpg</Link></li>
            <li><Link class="dropdown-item text-black" to='action'>action</Link></li>


            
          </ul>
        </li>
     
      
    
    </ul>:''
      
    
    }
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        {userData?
       <>
         <li className="nav-item">
         <Link className="nav-link text-white mx-3"to='profile'>Profile</Link>
       </li>
        <li className="nav-item">
        <Link className="nav-link text-primary mx-3  border border-primary rounded-3  px-3" onClick={logout} to='login' >Logout</Link>
        

        
        </li>
       </>
        
      :<>
      <li className="nav-item">
          <Link className="nav-link text-white mx-3"to='login'>Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-primary mx-3  border border-primary rounded-3 px-3"to='join' >Join Free</Link>

        
        </li>
      
      
      
      </>
      }
      
      </ul>
    </div>
  </div>
</nav>

  )
}
