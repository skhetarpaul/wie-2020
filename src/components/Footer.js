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
                        <p> BVPIEEE is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at lectus urna duis convallis convallis. Urna duis convallis convallis tellus id interdum velit laoreet id. Volutpat odio facilisis mauris sit. Id nibh tortor id aliquet lectus proin nibh. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. A diam sollicitudin tempor id. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Egestas diam in arcu cursus euismod quis viverra nibh. Elementum sagittis vitae et leo duis. Quam nulla porttitor massa id neque aliquam. Facilisis magna etiam tempor orci eu lobortis elementum nibh. </p>
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