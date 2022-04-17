import React,{useState} from 'react'
import Link from "react-router-dom"
import loginimg from '../assets/img/login.jpg'
const Register=()=>{
    const [username,Setusername]=useState("")
    const [password,Setpassword]=useState("")

    const register= async (e)=>{
        await fetch("http://127.0.0.1:8000/api/users/",{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({username:username,password:password})
        }).then(data=>data.json()).then(
            data=>{
                console.log(data.token)
            }
        ).catch(error=>console.log(error))
    }
    return (
        <div style={{backgroundColor:"#000C22"}} className="container-fluid">
        <section className="ftco-section">
<div className="container">
<div className="row justify-content-center">
<div className="col-md-12 col-lg-10">
<div className="wrap d-md-flex">
<div className="img" style={{backgroundSize: 'cover',backgroundImage: {loginimg}}} >
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
<button type="submit"  onClick={register}className="form-control btn btn-primary rounded submit px-3">register</button> 
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
    )
}

export default Register