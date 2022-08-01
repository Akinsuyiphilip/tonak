import React from 'react';
import { BrowserRouter as Router, Switch,Route, Link } from 'react-router-dom';

function Navbar() {
return (
<>
    <Router>
        <div>
            <div className='navmain'>
                <div className="side">
                    <h2 className="logo">Tonak</h2>
                </div>
                <div className="links">
                    <ul>
                        <Link to='./' className='link'> Home</Link>
                        <Link to='/' className='link'> About Us</Link>
                        <Link to='/' className='link'> Contact Us</Link>
                    </ul>
                </div>
            </div>
        </div>
        <switch>

        </switch>

    </Router>
</>

)
}

export default Navbar