import React from 'react'
import { Link } from 'react-router-dom'
import './aboutus.css'
import ImageSlider from './imageSlider'
import { SliderData } from './SliderData'
import {BsCheckCircleFill} from 'react-icons/bs'
export default function Aboutus() {
  return (
    <div>
      <div className='wbox'></div>
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
  
        <div class="head">ABOUT US</div>
        <div class="head1">
            <Link to="/Home">HOME</Link>
        </div>
        <div class="head2">
          <a>| INVENTORY</a>
        </div>
  
   
    <div class="top" style={{color: "#D3AB43"}}>ABOUT OUR COMPANY</div>
    <div class="top2" style={{color: "#000000"}}>FOR ALL YOUR  LUXURY & AUTOMOTIVE NEEDS</div>
    <img src={require("D:/react/myproject/src/octane96/rc.jpeg")} class="log1"alt="rc"/>
    <div class="para">A Luxury automotive company that provides high-end cars & services for resale. Octane 96 is your premier source for all things automotive. Luxury, performance, and pre-owned vehicles with the best prices in Coimbatore.</div>
    <img src={require("D:/react/myproject/src/octane96/logog.png")} class="logo1" alt="logog"/>
    <div class="para2">
        <ul>
            <li>World Class Collections</li>
            <li>Solid Trusted Reputation</li>
            <li>Experienced & Market Knowledge</li>
            <li>Strong Customer Service</li>
          </ul>
    </div>
    <div className='tick'>
      <ul>
   <li><BsCheckCircleFill /></li> 
   <br></br>
   <li><BsCheckCircleFill /></li> 
   <br></br>
   <li><BsCheckCircleFill /></li> 
   <br></br>
   <li><BsCheckCircleFill /></li> 
      </ul>

    </div>
    <div class="wbx">
    <div className='losli'>
       <img src={require("./cop1.png")} alt="img"/>
      <img src={require("./cop2.png")}  alt="img"/>
      <img src={require("./cop3.png")}  alt="img"/>
      <img src={require("./cop4.png")}  alt="img"/>
      </div>
    </div>
    
    <div class="contha"></div>
    <div class="coha"></div>
    <div class="cnha">Contact us</div>
    <div className='cn1ha'>Visit octane96 and we would commit to giving you best in class service with personalised attention and assistance to your requirements or contact us and we will make the delivery of your car a memorable one.</div>
    <div className='cn2ha'>
      <img src={require('D:/react/myproject/src/octane96/phone3.png')} alt="pn"></img>
    </div>
    <div className='cn3ha'>
     Phone no
     +919942137316
    </div>
    <div className='cn4ha'>
      <img src={require("D:/react/myproject/src/octane96/mail.jpg")} alt="mail"></img>
    </div>
    <div className='cn5ha'>
      Mail Address
      octane96@gmail.com
    </div>
    <div className='cn6ha'>
      Our info
    </div>
    <div className='cn7ha'>
    <Link to="/Home">HOME</Link>
    <Link to="/oct"style={{top: "1250px"}}>INVENTORY</Link>
    <Link to="/gallery" style={{top: "1280px"}}>GALLERY</Link>
    <Link to="/aboutus" style={{top: "1310px",width:"90px"}}>ABOUT US</Link>
    </div>
    <div className='cha'>Follow us</div>
    <div className='cn8ha'>
      <img src={require("D:/react/myproject/src/octane96/fb.png")} alt="fb"></img>
      <img src={require("D:/react/myproject/src/octane96/Instagram.png")} alt="insta" style={{left: "1040px"}}></img>
      <img src={require("D:/react/myproject/src/octane96/youtubepng.png")} alt="youtube" style={{left:"1080px"}}></img>
    </div>
   
    </div>
  )
}
