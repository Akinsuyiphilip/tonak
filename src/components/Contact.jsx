import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
return (
<>
  <div className="contact">
    <div className="rowt">
      <div className="company">

        <div className="side-1">
          <h2 className="logo">Tonak</h2>
          <p>4,Akinsuyi Road</p>
          <p> Lagos-State</p>
          <p>+2347010268170</p>
        </div>

        <div className="side-2">
          <Link to='/'> Instagram</Link>
          <Link to='/'> Instagram</Link>
          <Link to='/'> Instagram</Link>
          <Link to='/'> Instagram</Link>
        </div>
        <div className="side-3">
          <p>Api</p>
          <p>Documentation</p>
          <p>Tools</p>
          <p>Apps</p>
          <p>Software</p>
        </div>
      </div>

      <div>copyrights 2022</div>
    </div>
  </div>
</>
)
}

export default Contact