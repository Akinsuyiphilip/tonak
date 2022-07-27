import React from 'react'
import {BrowserRouter as Router,} from 'react-router-dom';
import projectman from './images/projectman.jpg'
import softwaredev from './images/softwaredev.jpg'
import analysis from './images/analysis.jpg'

function Customer() {
return (
<>
    <Router>

        <div className="customer">
            <div className="service">
                <h2>Our Service</h2>
            </div>
            <div className="servicerender">
                <div className="projects">
                    <img src={projectman} alt=""  className='imgcus'/>
                    <h3>Projects Management</h3>
                    <p>We help you fulfil your dream project</p>
                </div>
                <div className="softwaredev">
                    <img src={softwaredev} alt=""  className='imgcus'/>
                    <h3>Software Development</h3>
                    <p>we build software to help your business grow</p>
                </div>
                <div className="systemanalys">
                    <img src={analysis} alt=""  className='imgcus'/>
                    <h3>System Analysis</h3>
                    <p>Steps are to be taken to be Great</p>
                </div>
                {/* <div className="systemmanagement">

                </div> */}
            </div>
        </div>

    </Router>
</>
)
}

export default Customer