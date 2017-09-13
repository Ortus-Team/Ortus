var React = require('react');
import { OfficerItem } from './components/OfficerItem/OfficerItem';

import styles from './GroupContentOfficers.scss'
/*
Student Group Item (*S*)
  Logo
  Name
  Category tags
  Size tag
*/

export class GroupContentOfficers extends React.Component {
  render() {
    return (
        <div className='groupContentOfficers'>
            <div className='groupContentOfficersWrapper'>
                <div className="groupContentOfficersContent">
                    <div className="groupPageTopContent">
                        <div className="groupPageOfficers">
                            {/* <h3 className='groupSectionHeading'>Officers</h3> */}
                            <div className="groupUpcomingOfficers">
                                <OfficerItem />
                                <OfficerItem />
                                <OfficerItem />
                                <OfficerItem />
                                <OfficerItem />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};