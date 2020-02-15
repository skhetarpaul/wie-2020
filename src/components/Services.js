import React, { Component } from 'react'
import Title from './Title'
import {FaGifts} from 'react-icons/fa';
// import { AiTwotoneBank } from "react-icons/ai"
import { GiCash } from "react-icons/gi";
import {IoIosPeople} from 'react-icons/io'
import {DiCodeBadge} from 'react-icons/di'
import {GoSmiley} from 'react-icons/go'
import './Services.css'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <GiCash/>,
                title: "HUGE Cash Rewards",
                info: 
                    "Win cash rewards upto 2,50,000 for 1st position holder and subsequent runner ups"
            },
            {
                icon: <IoIosPeople/>,
                title: "Great Community",
                info:
                 "Stand a chance to be a part of great community of developers at BVPIEEE."
            },
            {
                icon: <FaGifts/>,
                title: "Gifts and swags",
                info:
                    "Amazing gifts and swags for all the participants owing to their creativity and ideas."
            },
            {
                icon: <DiCodeBadge/>,
                title: "CertificatE to all",
                info: 
                    "A participation certificate will be awarded to all the participants from BVPIEEE."
            }
        ]
    }
    render() {
        return (
            <section className = "services">
                <Title title = "What we have for you?"/>
                <div className = "services-center">
                    {this.state.services.map((item, index )=> {
                        return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
