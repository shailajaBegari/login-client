


import React, {useState,useEffect} from "react"
import "./login.css"
import axios from "axios"
import {useNavigate} from "react-router-dom";
// import Homepage from 'components/homepage/homepage'

const Login = ({ setLoginUser}) => {
  const navigate = useNavigate();


    const [ user, setUser] = useState({
       email:"",
        password:""
    }) 

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const login = () => {
        const {  email, password } = user
    
              if( (email && password )){
                  axios.post("http://localhost:5000/login", user,{
                  }).then( res => {
                        alert(res.data.message)
                        if(res.data.message==="Login Successfull"){
                            window.localStorage.setItem('user', JSON.stringify(res.data))
                            const userd=res.data.user.name
                            console.log(userd)
                            navigate("/Homepage" )
                            }
                  })
                }
               else if((email && password) !== true){
                   navigate("/login")

               }             
       
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div>        
            </div>
        
    )
}

export default Login




