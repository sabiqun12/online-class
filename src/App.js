//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainCourse from './components/MainCourse/Maincourse';



function App() {
  return (
    <div>
      <Header></Header>
      <MainCourse></MainCourse>
      
    </div>
  );
    /*<div className="App">
      <h2>hello</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );*/
  }

export default App;
