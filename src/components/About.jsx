import React from 'react'
import {BrowserRouter as Router,} from 'react-router-dom';
import Contact from './Contact';
import Tables from './Tables';

function About() {
return (
<>
    <Router>
        <div className="about">
            <div className="header">
                <h2>About Us</h2>
            </div>
            <Tables/>
            <Tables/>
            <Contact/>
        </div>
    </Router>
</>
)
}

export default About