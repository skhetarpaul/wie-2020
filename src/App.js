import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import dummyText from "./DummyText";
// import Hero from './images/woman.png';


function App() {
  return (
    <div className="App">
      
      <div className = "animation-moving">
      <Navbar />
      
      {/* <img src={Hero} /> */}
        {/* <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={true}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={true}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
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
