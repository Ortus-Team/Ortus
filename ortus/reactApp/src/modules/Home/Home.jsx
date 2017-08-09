var React = require('react');

import { Navbar } from './components/Navbar/Navbar';
import { DynamicContent } from './components/DynamicContent/DynamicContent';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';
import { FeaturedGroups } from './components/FeaturedGroups/FeaturedGroups';
import { GetInvolved } from './components/GetInvolved/GetInvolved';
import { styles } from './Home.scss';

/*
Home
  NavBar
  Content
    Dynamic Content
    Upcoming Events
    Featured Student Groups
    Get Involved
*/

export class Home extends React.Component {
  render() {
    return (
        <div className='homeWrapper'>
          <Navbar />
          <div className='homeContent'>
            <DynamicContent />
            <UpcomingEvents />
            <FeaturedGroups />
            <GetInvolved />
          </div>
        </div>
    );
  }
};