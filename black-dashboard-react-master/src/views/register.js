import React,{useState,useEffect} from 'react'
import Link from "react-router-dom"
import loginimg from '../assets/img/login.jpg'
const Register=()=>{
    const [email,Setemail]=useState("")
    const [password1,Setpassword1]=useState("")
    const [password2,Setpassword2]=useState("")
    const[errors,Seterrors]=useState(false);
    const[loaading,Setloading]=useState(true);
    

    useEffect(()=>{
        if(localStorage.getItem('token')!==null){
            window.location.replace("http://localhost:3000/admin/dashboard")
        }else{
            Setloading(false)
        }
    },[])

    const register=(e)=>{
        e.preventDefault();
        const user = {
            email: email,
            password1: password1,
            password2: password2
        };
        fetch("http://127.0.0.1:8000/api/users/auth/register/",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            if(data.key){
                localStorage.clear();
                localStorage.setItem('token',data.key);
                window.location.replace('http://localhost:3000/admin/user-profile');
            }else{
                Setemail('');
                Setpassword1('');
                Setpassword2('');
                localStorage.clear();
                Seterrors(true)
            }
        })
    }
    return (
<div style={{backgroundColor:"#000C22"}} className="container-fluid">
    <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10">
                    <div className="wrap d-md-flex">
                        <div className="img" style={{backgroundSize: 'cover',backgroundImage: {loginimg}}} ></div>
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
                        <label className="label" htmlFor="username">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e)=>Setemail(e.target.value)} placeholder="Username" name="username" required/>
                    </div>
                    <div className="form-group mb-3">
                        <label label className="label" htmlFor="password">Password</label>
                        <input type="password" className="form-control" value={password1} onChange={(e)=>Setpassword1(e.target.value)}placeholder="Password" name="password" required/>
                    </div>
                    <div>
<label className="label" htmlFor="cpassword"> confirm Password</label>
<input type="password" className="form-control" value={password2} onChange={(e)=>Setpassword2(e.target.value)}placeholder="Password" name="cpassword" required/>
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