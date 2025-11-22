import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  
  return (
    <>
<header>
  {/* Header Start */}
  <div className="header-area header-transparent">
    <div className="main-header header-sticky">
      <div className="container-fluid">
        <div className="menu-wrapper d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo">
            <a href="/home"><img src="assets/img/logo/logo.png" alt /></a>
          </div>
          {/* Main-menu */}
          <div className="main-menu f-right d-none d-lg-block">
            <nav>
              <ul id="navigation">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                 <li><Link to="/exercise">Execrcise</Link>
                      <ul class="submenu">
                          <li><Link to="/bodypart">Bodypart</Link></li>
                          <li><Link to="/equipment">Equipment</Link></li>
                          <li><Link to="/target">Target</Link></li>
                     </ul>
                 </li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                 
              </ul>
            </nav>
          </div>          
          {/* Header-btn */}
          {/* <div className="header-btns d-none d-lg-block f-right">
            <a href="contact.html" className="btn">Contact me</a>
          </div> */}
          {/* Mobile Menu */}
          <div className="col-12">
            <div className="mobile_menu d-block d-lg-none" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>
    </>
  )
}

export default Header