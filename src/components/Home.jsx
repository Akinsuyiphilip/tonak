import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import black from './images/black.jpg';

function Home() {
return (
<>
  <Router>
    <div className="alo">

      <div className="homepage">
        <div className="hometext">
          <div className="homeimage">

            <h2>Welcome!</h2>
            <i class="fa-brands fa-teamspeak"></i>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <img src={ black} alt="" />
    </div>
  </Router>
</>
)
}

export default Home