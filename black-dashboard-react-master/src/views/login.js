
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import loginimg from '../assets/img/login.jpg'
const Login=()=>{
    
    const [email,Setemail]=useState("")
    const[password,Setpassword]=useState("")
    const[errors,Seterrors]=useState(false)
    const[loading,Setloading]=useState(true)
    useEffect(()=>{
        if(localStorage.getItem('token')!==null){
            window.location.replace("http://localhost:3000/admin/dashboard")
        }else{
            Setloading(false)
        }
    },[])

    const login=(e)=>{
        e.preventDefault();
        const user={
            email:email,
            password:password
        };
        fetch('http://127.0.0.1:8000/api/users/auth/login/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            if(data.key){
                localStorage.clear();
                localStorage.setItem('token',data.key);
                window.location.replace('http://localhost:3000/admin/user-profile');
            }else{
                Setemail('');
                Setpassword('');
                localStorage.clear()
                Seterrors(true);
            }
        })
    }

    return(

        <div style={{backgroundColor:"#000C22"}} className="container-fluid">
            {errors === true&&<h2>cannot login with these credentials</h2>}
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
<label className="label" htmlFor="email">Email</label>
<input type="email" className="form-control" value={email} onChange={(e)=>Setemail(e.target.value)} placeholder="email" name="email" required/>
</div>
<div className="form-group mb-3">
<label className="label" htmlFor="password">Password</label>
<input type="password" className="form-control" value={password} onChange={(e)=>Setpassword(e.target.value)}placeholder="Password" name="password" required/>
</div>
<div className="form-group">
<button type="submit" className="form-control btn btn-primary rounded submit px-3" onClick={login}>Sign In</button>


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