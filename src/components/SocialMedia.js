import React, {Component} from 'react';

import './SocialMedia.css';

class SocialMedia extends Component
{
    render() {
        return(

            <div className="SocialMedia">

                
                <a className="SocialMedia-Icons-Links" href="mailto:bvpieee.info@gmail.com">
                    <i id="Email-Icon" class="SocialMedia-Icons fas fa-envelope fa-3x"></i>
                </a>

                {/* <a className="SocialMedia-Icons-Links" href="">
                    <i id="Youtube-Icon" class="SocialMedia-Icons fab fa-youtube fa-3x"></i>
                </a> */}

                <a className="SocialMedia-Icons-Links" href="https://www.facebook.com/bvpieee">
                    <i id="Facebook-Icon" class="SocialMedia-Icons fa-icon fab fa-facebook-square fa-3x" ></i>
                </a>

                {/* <a className="SocialMedia-Icons-Links" href="https://www.twitter.com">
                    <i id="Twitter-Icon" class="SocialMedia-Icons fa-icon fab fa-twitter-square fa-3x" ></i>
                </a> */}

                <a className="SocialMedia-Icons-Links" href="https://www.instagram.com/bvpieee">
                    <i id="Instagram-Icon" class="SocialMedia-Icons fa-icon fab fa-instagram fa-3x" ></i>
                </a>
                
            </div>
        );
    }
}

export default SocialMedia;
