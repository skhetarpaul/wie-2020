import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import woman from '../src/images/wom-p2.webp';
// import singlePage from './components/singlePage'
import Texter from './components/Texter'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "woman-image">
        <img src = {woman} />
      </div>
      <div className = "float-wie">
        <p className = "wie-hack"> <span className = "enlarge">{` <`}</span><Texter />
        <span className = "enlarge">{` />`}</span></p>
        <div className = "animation-moving">
      </div>
      
         {/* <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        /> */}
       
        <ul className = "box-type">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
