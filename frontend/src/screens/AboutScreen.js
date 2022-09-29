import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider/Slider';
import { ImWhatsapp } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si';

export default function AboutScreen() {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <h1>About Us</h1>
        <br />
      </div>
      <div>
        <Slider />
        <br />
      </div>
      <div className="text">
        <ol>
          <h3>
            1. For any kind of inconvience or help you can contact us WhatsApp for
            quick help.
          </h3>
          <h3>2. We will be available 24/7 for you.</h3>
          <h3>3. <ImWhatsapp size={40}/> +92 3256791719 </h3>
          <h3>4. We are also on Social Media. Please checkout our Social Media pages. </h3>
          <h3>  <ul className="list-unstyled-about">
            <li className="listStyleAbout">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/funkyjewels.pk?igshid=YmMyMTA2M2Y="
              >
                <FiInstagram size={50}/>
              </a>
            </li>
            <li className="listStyleAbout">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100085478615576"
              >
                <SiFacebook size={50} /> 
              </a>
            </li>
          </ul> </h3>
        </ol>
      </div>
      <br />
    </div>
  );
}
