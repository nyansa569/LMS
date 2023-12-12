import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      {/* <Head /> */}
      <header>
        <nav className='flexSB'>
        <div className='logo'>
            <h1>      Learning Management System</h1>
          </div>

          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/courses'>All Courses</a>
            </li>
            <li>
              <a href='/pricing'>Pricing</a>
            </li>
            <li>
              {/* <a  href="mailto:nyansafoaffum@gmail.com?subject=Application%20for%20the%20LMS&body=Hi%20there!">Contact</a> */}
              <a href="mailto:nyansafoaffum@gmail.com?subject=Application%20for%20Enrollment%20in%20[Learning%20Management%20System]%20-%20[Your%20Full%20Name]&body=Dear%20Ghana Communication Technology University,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20My%20name%20is%20[Your%20Full%20Name],%20and%20I%20am%20a%20student%20currently%20enrolled%20at%20[Your%20University].%20I%20am%20writing%20to%20formally%20request%20enrollment%20in%20the%20university's%20Learning%20Management%20System%20(LMS)%20for%20the%20upcoming%20semester%20or%20academic%20year.%0D%0A%0D%0AAs%20a%20diligent%20student,%20I%20understand%20the%20importance%20of%20utilizing%20the%20resources%20provided%20by%20the%20LMS%20to%20enhance%20my%20learning%20experience.%20The%20system's%20features,%20such%20as%20online%20courses,%20collaborative%20tools,%20and%20resource%20materials,%20are%20integral%20to%20my%20academic%20progress.%0D%0A%0D%0AHere%20are%20the%20details%20required%20for%20enrollment:%0D%0A- Full%20Name:%20[Your%20Full%20Name]%0D%0A- Student%20ID:%20[Your%20Student%20ID]%0D%0A- University%20Email:%20[Your%20University%20Email%20Address]%0D%0A- Course%20of%20Study:%20[Your%20Course%20of%20Study]%0D%0A- Expected%20Graduation%20Year:%20[Your%20Expected%20Graduation%20Year]%0D%0A%0D%0AI%20kindly%20request%20you%20to%20process%20my%20enrollment%20in%20the%20Learning%20Management%20System%20at%20your%20earliest%20convenience.%20If%20there%20are%20any%20additional%20forms%20or%20procedures%20required,%20please%20inform%20me,%20and%20I%20will%20promptly%20complete%20them.%0D%0A%0D%0AI%20appreciate%20your%20attention%20to%20this%20matter%20and%20look%20forward%20to%20utilizing%20the%20LMS%20to%20its%20fullest%20potential%20for%20my%20academic%20and%20personal%20development.%0D%0A%0D%0AThank%20you%20for%20your%20time%20and%20assistance.%0D%0A%0D%0ASincerely,%0D%0A%0D%0A[Your%20Full%20Name]%0D%0A[Your%20Student%20ID]%0D%0A[Your%20Contact%20Information]">Contact us</a>
            </li>
            <li>
              <a href="/signin">Login</a>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
