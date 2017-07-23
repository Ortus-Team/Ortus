var React = require('react');
var ReactDOM = require('react-dom');

import { Navbar } from './components/Navbar/Navbar';
import { DynamicContent } from './components/DynamicContent/DynamicContent';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';
import { FeaturedGroups } from './components/FeaturedGroups/FeaturedGroups';
import { GetInvolved } from './components/GetInvolved/GetInvolved';

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
    const h1Style = {
      backgroundColor: 'red'
    }
    
    return (
        <div>
          {/*<Navbar />*/}
          <Navbar />
          <DynamicContent />
          <UpcomingEvents />
          <FeaturedGroups />
          <GetInvolved />
          <h1 style={h1Style}>this is an h1</h1>
        </div>
    );
  }
};