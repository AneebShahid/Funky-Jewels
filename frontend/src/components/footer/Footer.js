import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';
import { SiFiverr } from 'react-icons/si';
import { ImLocation } from 'react-icons/im';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Funky Jewels By Mishel</h5>
          <hr />
          <p>A little something for you to wear.</p>
          <p>
            <ImLocation size={25}/>
            Punjab, Pakistan</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social</h5>
          <ul className="list-unstyled">
            <li className="listStyle">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/funkyjewels.pk?igshid=YmMyMTA2M2Y="
              >
                <FiInstagram size={20}/> Instagram
              </a>
            </li>
            <li className="listStyle">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100085478615576"
              >
                <SiFacebook size={20} /> Facebook
              </a>
            </li>
            <li>
              <SiGmail size={20}/> funkyjewels01@gmail.com
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 >Developer:</h5>
          <ul className="list-unstyled">
            Muhammad Aneeb Shahid
            <li className="listStyle">
          
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fiverr.com/aneebshahid535?up_rollout=true"
              >
              <SiFiverr  size={50} /> 
              </a>
              {' '} 
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AneebShahid"
              >
              <BsGithub style={{marginLeft:10}} size={25} /> 
              </a>
              {' '} 
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aneebshahid27/"
              >
              <BsLinkedin style={{marginLeft:10}} size={25} /> 
              </a>
              {' '} 
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/aneeb.chaudhary.9"
              >
              <SiFacebook style={{marginLeft:10}} size={25}/>  
              </a>
              {' '} 
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/aneebshahid27/"
              >
              <FiInstagram style={{marginLeft:10}} size={25}/> 
              </a>
              {' '} 
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/AneebShahid1"
              >
              <BsTwitter style={{marginLeft:10}} size={25}/> 
              </a>
             
            </li>
           
            
            
            <hr />
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      &copy; {year} Copyright : Funky-Jewels
    </div>
  </footer>
);

export default Footer;
