import React, { Component } from 'react'
import logo from './book-logo.png'
import './Headstyles.css'

class Top extends Component {

  constructor(){
    super();
      this.state = {
        message:'Sign in'
      }
      };


    changeName(){
      const tick = document.querySelector(".fa-solid")
      const bg = document.querySelector(".active")
      tick.style.display = 'contents'
      bg.style.background = 'white'
      bg.style.color = 'black'
      this.setState({
        message:`Signed in`
      });
    }
    render() {
      return (
        <div className='first-page'>
          <div className="header">
            <img src={logo} alt="logo" width="70px"></img>
            <h1>Book Store</h1>

            <nav className="nav-links">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Our Services</li>
                <li>Contact Us</li>
                <li id="active" className="active" onClick={()=>this.changeName()}>{this.state.message}<i class="fa-solid fa-circle-check"></i></li>
              </ul>
            </nav>
          </div>

          <div className="contents">
            <h2>The <span>Smart</span> <br/>Choice For <span>Future</span></h2>
            <input type='search' className="input-box" placeholder='Search for locations'></input>
          </div>

        </div>
    );
  }
}

export default Top;



