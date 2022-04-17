import { formHelperTextClasses } from '@mui/material'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import loginimg from '../assets/img/login.jpg'
const Login=()=>{
    const login= async  (e)=>{
        await fetch("http://127.0.0.1:8000/auth/",{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({username:username,password:password})
        }).then(
            data=>data.json()
        ).then(
            data=>{console.log(data.token)}
        )
        .catch(error=>console.log(error))
    }

    const [username,Setusername]=useState("")
    const[password,Setpassword]=useState("")


    return(
        <div style={{backgroundColor:"#000C22"}} className="container-fluid">
        <section className="ftco-section">
<div className="container">
<div className="row justify-content-center">
<div className="col-md-12 col-lg-10">
<div className="wrap d-md-flex">
<div className="img" style={{backgroundSize: 'cover',backgroundImage: loginimg}} >
</div>
<div className="login-wrap p-4 p-md-5">
<div className="d-flex">
<div className="w-100">
<h3 className="mb-4">Sign In</h3>
</div>
<div className="w-100">
<p className="social-media d-flex justify-content-end">
<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
</p>
</div>
</div>
<form action="#" className="signin-form">
<div className="form-group mb-3">
<label className="label" htmlFor="username">Username</label>
<input type="text" className="form-control" value={username} onChange={(e)=>Setusername(e.target.value)} placeholder="Username" name="username" required/>
</div>
<div className="form-group mb-3">
<label className="label" htmlFor="password">Password</label>
<input type="password" className="form-control" value={password} onChange={(e)=>Setpassword(e.target.value)}placeholder="Password" name="password" required/>
</div>
<div className="form-group">
<Link to="/profile"><button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button></Link>   
<button type="submit"  onClick={login}className="form-control btn btn-primary rounded submit px-3">testing</button> 

</div>
<div className="form-group d-md-flex">
<div className="w-50 text-left">
<label className="checkbox-wrap checkbox-primary mb-0">Remember Me
<input type="checkbox" />
<span className="checkmark"></span>
</label>
</div>
</div>
</form>
<p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
</div>
</div>
</div>
</div>
</div>
</section>
    </div>
    )
}
export default Login