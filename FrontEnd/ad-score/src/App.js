import React,{useState} from 'react';
import './App.css';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';
import './black-dashboard-react-master/black-dashboard-react-master/src/assets/css/black-dashboard-react.css'
import  './black-dashboard-react-master/black-dashboard-react-master/src/assets/css/black-dashboard-react.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom"
import UserProfile from './black-dashboard-react-master/black-dashboard-react-master/src/views/UserProfile'
import Hero from './hero'
import Login from './login'
import Dashboard from './black-dashboard-react-master/black-dashboard-react-master/src/views/Dashboard'
function App() {

  const[token,setToken]=useState('')

  const userlogin=(tok)=>{
    setToken((tok)=>{console.log(tok)
    return tok})
  }
  return (
    
    <Router>
      <Routes>
        <Route exact path ='/' element={<Hero/>}/>
        <Route exact path ='/login' element={<Login userlogin={userlogin}/>}/>
        <Route exact path='/profile' element={<UserProfile/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
