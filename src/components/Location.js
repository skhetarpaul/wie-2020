import React, {Component} from 'react';

import './Location.css';

class Location extends Component
{
    render() {
        return(
            <div className="Location">

                <i className="fas fa-map-marker-alt fa-3x"></i>

                <div className="Location-Address">
                    
                    <h3>BVCOE, New Delhi</h3>
            
                    {/* <p>
                        Bharati Vidyapeeth's College of Engineering,
                    </p>
                    <p >
                        Rohtak Road, A-4 Block, Paschim Vihar, New Delhi, Delhi 110063
                    </p> */}
                </div>
                
            </div>
        );
    }
}

export default Location;
