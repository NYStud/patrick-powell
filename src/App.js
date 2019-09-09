import React from 'react';
import SocialMedia from './components/SocialMedia';
import Disclaimer from './components/Disclaimer';
import './styles.css';


function App() {
  return (
    <div id="App">

      <div id="Header" className="navbar navbar-dark bg-dark justify-content-center shadow-lg">
        <SocialMedia />
      </div>

      <div id="Page" className="container-fluid col-10 mx-auto">

        <div id="disclaimer" className="my-2 shadow-sm"><Disclaimer /></div>

        <div className="card my-3 text-center shadow-sm">
          <h1>Hi there</h1>
          <p>My name is Patrick Powell and this is my website.</p>

          <div className="card-img text-center mx-auto my-1">
            <iframe title="powerbi" width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNzNmZjc2ODEtMDE3OC00NTQxLWIzZmItMWYyNDk4Y2MxYzVlIiwidCI6ImM5ZjZiMDRkLWZlNDYtNGJhMS1iZDNlLWE4ODU5MzIyNjJkOSIsImMiOjJ9"></iframe>
          </div>

          <div className="card-body">

          </div>
        </div>

        <br />


      </div>

      <div id="Footer" className="navbar navbar-dark bg-dark">
        <a className="text-light btn-link mx-2" href="/">Home</a>
      </div>
    </div>

  )
}
export default App;
