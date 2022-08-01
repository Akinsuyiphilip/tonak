import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Sendmailto from './Sendmail';


function Contact() {
return (
<>
    <Router>
        <div className="contact">
            <div className="side-1">
                <h2>Tonak</h2>
                <div className="address">
                    <p>4,Akinsuyi Road,</p>
                    <p>Lagos-State</p>
                </div>
            </div>
            <div className="side-2">
                <Link to="/" className='link'>
                Instagram <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/" className='link'>
                Facebook <i class="fa-brands fa-facebook"></i>
                </Link>
            </div>
            <div className="side-3">
                <div className="sendmail">
                    <Sendmailto  className="link" label="Send us a mail" mailto="mailto:philipakinbolade@gmail.com" />
                </div>
            </div>

        </div>
    </Router>

</>
)
}

export default Contact;