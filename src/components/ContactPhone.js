import React, {Component} from 'react';

import './ContactPhone.css';

class ContactPhone extends Component
{
    
    render() {

        const contacts = [ {name: 'Himani', number: '8447830535'}, {name: 'Shreya', number: '9013151804'}, {name: 'Chetanya', number: '9958033957'}];

        return(
            <div className="ContactPhone">

                <i className="fa-icon fa fa-phone fa-2x"></i>

                <div className="ContactPhone-Number">
                    
                    <h3>8447830535 (Himani), 9013151804 (Shreya), 9958033957 (Chetanya) </h3>
            
                </div>
                
            </div>
        );
    }
}

export default ContactPhone;
