import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import woman from '../src/images/wom-p2.webp';
// import singlePage from './components/singlePage'
import Texter from './components/Texter'
import Carousel from './components/Carousel'
import {carouselSlidesData} from './components/Carousel'
import Services from './components/Services'

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "woman-image">
        <img src = {woman} />
      </div>
      <div className = "float-wie"> 
        <p className = "wie-hack"> <span className = "enlarge">{` <`}</span><Texter />
          <span className = "enlarge">{` />`}</span>
        </p>
        <div className = "wie-about">
          <p className = "text-wie">
            BVPIEEE Women in Engineering (WIE) is a professional organization dedicated<br/>
             to promoting women engineers and scientists, and inspiring girls around the <br/>
             world to follow their academic interests in a career in engineering.
          </p>
        </div>
      </div>

      <div className = "empty-space"></div>
      <Services />
      <Carousel className = "carousel-judges" slides={carouselSlidesData}/>
      
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

      <Footer />
    </div>
  );
}

export default App;
