import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import videobg from './sd-hero-video.mp4'
import'./vid.css'
import { ImCross } from 'react-icons/im'
export default function Home() {
  const shoot = () =>
  {
    document.getElementById('id01').style.display='block';
  }
  const shot = () =>
  {
    document.getElementById('id01').style.display='none';

  }
  return (
    <div>

<img src={require("D:/react/myproject/src/octane96/logogno.png")} class = "logo" alt="logo"/>
<img src={require("D:/react/myproject/src/octane96/front.png")} class = "fro" alt="logo"/>
<img src={require("D:/react/myproject/src/octane96/logogno.png")} class = "fros" alt="logo"/>
<div class="index"></div>
<div class="home">
<a href="#" style={{top:"40px",left:"870px"}}>HOME</a>
<Link to ="/oct" style={{top:"40px" ,left:"980px"}} >INVENTORY</Link>
<a href="#" style={{top:"40px",left:"1135px"}} >GALLERY</a>
<Link to="/aboutus" style={{top:"40px" ,left:"1270px"}} >ABOUTUS</Link>
<Link to="/backend" style={{top:"40px",left:"1400px"}}>LOGIN</Link>
</div>
<div class="best">| BEST USED CARS IN COIMBATORE</div>
<div class="lux">LUXURY CARS AT BEST PRICE</div>
<div class="luxcs">LUXURY ,COMFORT & SAFTEY</div>
<img src={require("D:/react/myproject/src/octane96/bwpng.png")} class="bw" alt="bw"/>
<div class="of">OUR FEATURED CARS</div>
<img src={require("D:/react/myproject/src/octane96/back.png")} class="back"alt="back"/>
<div class="oss">OUR SHOWROOM SPEC</div>
<div class="lg">Luxury Guaranteed</div>
<div class="t1" style={{left: "20px",top: "1630px",width:"500px"}} >VAST SUPER CAR COLLECTION</div>
<div class="t1" style={{left: "1100px",top: "1630px"}}>ULTRA FAST DELIVERY</div>
<div class="t1" style={{left: "28px",top: "2000px",width:"500px"}}>BEST AFTER SALES SERVICE</div>
<div class="t1" style={{left: "1100px",top: "2000px",width:"400px"}}>INSTANT LOAN APROVAL</div>
<div class="t2" style={{left: "30px",top: "1680px"}}>Octane96 has a large collection of used super cars for one to choose from. Our cars are completely tested and ready to drive home!</div>
<div class="t2" style={{left: "1100px",top: "1680px"}}>With our best in class delivery team, we can deliver your luxury car on time and without any hustle from your end!</div>
<div class="t2" style={{left: "30px",top: "2050px"}}> We have industry leading experts who have years of experience in servicing luxury cars. We do it at an affordable cost!</div>
<div class="t2" style={{left: "1100px",top: "2050px"}}>Leave the hustle of getting a loan on time. Our financial parners will help you to get your loan approved instantly</div>
<div class="wrappe">
  <img src={require("D:/react/myproject/src/octane96/yc.png")} style={{position: "absolute",width: "590px",height: "500px",left: "455px",top: "1700px"}}alt="yc"/>
</div>
    <button onClick={shoot} class="sc">SELL A CAR</button>
    <div id="id01" class="modal">
      <form class="modal-content animate"  method="post">
        <div class="container">
          <label for="uname"><b>Please fill the form below to sell a car</b></label>
          <input type="text" placeholder="Seller Name" name="uname" required/>
          <input type="text" placeholder="Phone Number" name="psw" required/>
          <input type="text" placeholder="Car Brand" name="ps1" required/>
          <input type="text" placeholder="Car Model" name="ps2" required/>
          <input type="text" placeholder="Variant" name="ps3" required/>
          <input type="text" placeholder="Year" name="p4" required/>
          <input type="text" placeholder="Price" name="y5" required/>
          <div class="bt">
              <button type="submit">Sell</button>
        </div>
        </div>
    
        <div class="container" style={{background:"#f1f1f1"}}>
          <div class="cancelbtn">
          <button  onClick={shot} >
            <ImCross />
          </button>
          </div>
        </div>
      </form>
    </div>
    <div>
    <video src={videobg} autoPlay loop muted class="vid"></video>
    </div>
    <div class="vidtxt">
      USED LUXURY CARS
    </div>
    <div className='vidtxt1'>
    Best Used Luxury Cars Showroom in Coimbatore
    </div>
    <div className='vidpic'>
      <img src={require("./vidpic.png")} alt="pic"></img>
    </div>
    <div class="wbxh">
    <div className='loslih'>
       <img src={require("./cop1.png")} alt="img"/>
      <img src={require("./cop2.png")}  alt="img"/>
      <img src={require("./cop3.png")}  alt="img"/>
      <img src={require("./cop4.png")}  alt="img"/>
      </div>
    </div>
    <div>
    <div class="conth"></div>
    <div class="coh"></div>
    <div class="cnh">contact us</div>
    <div className='cn1h'>Visit octane96 and we would commit to giving you best in class service with personalised attention and assistance to your requirements or contact us and we will make the delivery of your car a memorable one.</div>
    <div className='cn2h'>
      <img src={require('D:/react/myproject/src/octane96/phone3.png')} alt="pn"></img>
    </div>
    <div className='cn3h'>
     Phone no
     +919942137316
    </div>
    <div className='cn4h'>
      <img src={require("D:/react/myproject/src/octane96/mail.jpg")} alt="mail"></img>
    </div>
    <div className='cn5h'>
      Mail Address
      octane96@gmail.com
    </div>
    <div className='cn6h'>
      Our info
    </div>
    <div className='cn7h'>
    <Link to="/Home">HOME</Link>
    <Link to="/oct"style={{top: "3420px"}}>INVENTORY</Link>
    <Link to="/gallery" style={{top: "3450px"}}>GALLERY</Link>
    <Link to="/aboutus" style={{top: "3480px",width:"90px"}}>ABOUT US</Link>
    </div>
    <div className='ch'>Contact us</div>
    <div className='cn8h'>
      <img src={require("D:/react/myproject/src/octane96/fb.png")} alt="fb"></img>
      <img src={require("D:/react/myproject/src/octane96/Instagram.png")} alt="insta" style={{left: "1040px"}}></img>
      <img src={require("D:/react/myproject/src/octane96/youtubepng.png")} alt="youtube" style={{left:"1080px"}}></img>
    </div>
    </div>
     </div>
  )
}