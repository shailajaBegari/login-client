// import React from "react"
// import "./homepage.css";
import {Link} from 'react-router-dom';

import "./homepage.css"
import  {useState} from "react"
// import Rigister from '../register/Register'
import axios from "axios"


const Homepage = () => {
  
  const loc=  window.localStorage.getItem('user');

    return (
        <div className="homepage">
        {console.log(loc)}
        
        
         <h1> wellcome hello {}</h1>
    
         {/*<h1>wellcome   Hello {user.name} </h1>*/}
         <Link to="/login"  className="link"> <button className="button">Logout</button></Link>
        </div>
           
    )
}

export default Homepage

