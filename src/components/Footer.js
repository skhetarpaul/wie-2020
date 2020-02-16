import React, {Component} from 'react';

import './Footer.css';

import SocialMedia from './SocialMedia';

import Location from './Location';
import ContactPhone from './ContactPhone';

class Footer extends Component
{
    render()
    {
        return (
            <div className="Footer">
                <div className="Footer-Upper">
                    <div className="Footer-Upper-Text">
                        <p> BVPIEEE: the student branch of IEEE at Bharati Vidyapeeth's College of Engineering, since its inception aimed at promoting IEEE among students as a common platform to share their technical perspective through interactive sessions. Our endeavor is to harness the boundless youth potential and create a rich pool of technical expertise.
                        When you join IEEE, you join a community of over 425,000 technology and engineering professionals united by a common desire to continuously learn, interact, collaborate, and innovate. </p>
                    </div>

                    <div className="Footer-Upper-Icons">
                        <SocialMedia />
                        <Location />
                        <ContactPhone />
                    </div>
                </div>

                <div className="Footer-Lower">
                    BVPIEEE©2020, All Rights Reserved.
                </div>
            </div>
        );
    }
}

export default Footer;