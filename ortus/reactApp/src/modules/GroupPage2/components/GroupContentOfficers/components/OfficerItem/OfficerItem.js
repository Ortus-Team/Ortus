import React from 'react';

import { styles } from './OfficerItem.scss';

/*
officer Item (*S*)
  Date
  Image
  Title
  Student Group
  Location
  Short Description?
*/

export class OfficerItem extends React.Component {
  render() {
    return (
        <div className="officer">
            <div className="officerWrapper">
                <div className="officerContent">
                    {/* Image */}
                    <div className="officerImage">
                        <img src="#" /> {/* missing alt tag */}
                    </div>

                    {/* Date */}
                    <div className="officerText">
                        <h3 className="officerName">Officer Name</h3>
                        <h4 className="officerTitle">Officer Title</h4>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};