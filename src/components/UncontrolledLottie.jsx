import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/13118-tunnel.json'

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
            //   height= {default}
        />
      </div>
    )
  }
}

export default UncontrolledLottie