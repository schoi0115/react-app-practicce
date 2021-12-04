import './App.css';
import React from 'react';
import Header from './components/Header'
import Vacation from './components/Vacation'
import FrontEnd from './components/FrontEnd'

function App() {
  return (
    <div>
      <header>
        <h1>
          <Header />
        </h1>
      </header>
        <Vacation />
        <FrontEnd />

 
      <li>
        Front End
      </li>
      <li>
        Back End
      </li>
      <li>
        Try clean code!
      </li>
      <li>
        Try to deploy if you want, Git Hub or Heruko
      </li>



    </div>
  );
}

export default App;
