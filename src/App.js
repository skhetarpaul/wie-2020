import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
// import dummyText from "./DummyText";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className = "animation-moving">
      
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
