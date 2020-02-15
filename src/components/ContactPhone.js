import React, {Component} from 'react';

import './ContactPhone.css';

class ContactPhone extends Component
{
    render() {
        return(
            <div className="ContactPhone">

                <i className="fa-icon fa fa-phone fa-3x"></i>

                <div className="ContactPhone-Number">
                    
                    <h3>9876543210</h3>
            
                </div>
                
            </div>
        );
    }
}

export default ContactPhone;
