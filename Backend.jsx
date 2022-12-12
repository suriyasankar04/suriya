import React, { Component } from 'react';
import boto from './Backend.jpg';
import './Backend.css';
import logo from './logog.png';
import { Link } from 'react-router-dom';
export default class Backend extends Component {
  render() {
    return (
      <div>
      <div className='hj'>
      <img src={boto} alt="Backend Purposes" />
      </div>
      <div className='lob'>
      <img src={logo} alt="LOGO"/>
      </div>
      <div className='wel'>
        <p>Welcome to Backend!</p>
      </div>
      <div className='loginb'>
        <h2>LOG IN</h2>
      </div>
      <div className='user'>
        <h2>Username</h2>
      </div>
      <div >
        <input type={"Text"} name="QWE" id='jk89' placeholder='  Enter Username'required></input>
      </div>
      <div className='pass'>
        <h2>Password</h2>
      </div>
      <div>
        <input type={'password'} name="QWY" id='jj89' placeholder='  Enter Password ' required></input>
      
      </div>
      <div className='si'>
        <a href="#">SIGN IN</a>
      </div>
      <div className='bamck'>
          <Link to="/home" >BACK</Link>
      </div>
      </div>
    )
  }
}
