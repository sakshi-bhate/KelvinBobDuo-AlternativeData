import React from 'react';
import './App.css';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';

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
  return (
    
    <Router>
      <Routes>
        <Route exact path ='/' element={<Hero/>}/>
        <Route exact path ='/login' element={<Login/>}/>
        <Route exact path='/profile' element={<UserProfile/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
