var React = require('react');

import { Navbar } from './components/Navbar/Navbar';
import { DynamicContent } from './components/DynamicContent/DynamicContent';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';
import { FeaturedGroups } from './components/FeaturedGroups/FeaturedGroups';
import { Explore } from './components/Explore/Explore';
import { Register1 } from './components/Register1/Register1';
import { styles } from './HomeRegister.scss';

/*
Home
  NavBar
  Content
    Dynamic Content
    Upcoming Events
    Featured Student Groups
    Get Involved
*/

export class HomeRegister extends React.Component {
  render() {
    return (
      <div className='homeWrapper'>
        <Register1 />
        <Navbar />
        <div className='homeHeader'>
          <DynamicContent />
        </div>
        <div className='homeContent'>
          <UpcomingEvents />
          <FeaturedGroups />
          <Explore />
        </div>
      </div>
    );
  }
};