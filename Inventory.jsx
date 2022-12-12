import React from 'react';
import './inventory.css';
import c1 from'D:/react/myproject/src/octane96/c1.png'
import c2 from'D:/react/myproject/src/octane96/c2.png'
import c3 from'D:/react/myproject/src/octane96/c3.png'
import c4 from'D:/react/myproject/src/octane96/c4.png'
import { Link } from 'react-router-dom'
export default function Oct() {
  return (
    <div>
      
<img src={require("D:/react/myproject/src/octane96/logog.png")} class = "logo" alt="logo"/>
<div class="index"></div>
<div class="home">
<Link to='/home' style={{top:"40px",left:"870px"}}>HOME</Link>
<Link to ="/oct" style={{top:"40px" ,left:"980px"}} >INVENTORY</Link>
<a href="#" style={{top:"40px",left:"1135px"}} >GALLERY</a>
<Link to="/aboutus" style={{top:"40px" ,left:"1270px"}} >ABOUTUS</Link>
<a href="#" style={{top:"40px",left:"1400px"}}>LOGIN</a>
</div>
    
    <img src={require("D:/react/myproject/src/octane96/front.png")} class = "top1" alt="logo"/>
  
        <div class="head">INVENTORY</div>
        <div class="head1">
            <Link to="/Home">HOME</Link>
        </div>
        <div class="head2">
          <a>| INVENTORY</a>
        </div>
        <div class="search">SEARCH</div>
        <select name="cars" id="cars" class="car">
            <option value="">SELECT A CAR</option>
            <option value="volvo" >VOLVO</option>
            <option value="saab">SAAB</option>
            <option value="opel">OPEL</option>
            <option value="audi">AUDI</option>
          </select>
          <div className='conin'>
           <Link to="/home">
            <img src={require("D:/react/myproject/src/octane96/rc.jpeg")} alt="loading..." className='c1'></img> 
            </Link> 
          </div>
            <Link to='/home'>
            <img src={require("D:/react/myproject/src/octane96/rc.jpeg")} alt="loading..." className='c2'></img> 
            </Link>
            <Link to='/home'>
            <img src={require("D:/react/myproject/src/octane96/rc.jpeg")} alt="loading..." className='c3'></img> 
            </Link>
            <Link to='/home'>
            <img src={require("D:/react/myproject/src/octane96/rc.jpeg")} alt="loading..." className='c4'></img> 
            </Link>
            <Link to='/home'>
            <img src={require("D:/react/myproject/src/octane96/rc.jpeg")} alt="loading..." className='c5'></img> 
            </Link>
    </div>
  )
}
