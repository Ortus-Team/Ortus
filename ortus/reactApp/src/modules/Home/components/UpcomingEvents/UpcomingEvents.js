var React = require('react');

import { EventItem } from './components/EventItem/EventItem';
import { styles } from './UpcomingEvents.scss';
/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class UpcomingEvents extends React.Component {
  render() {
    return (
        <div>
            <h1>Upcoming Events</h1>
            <div className="upcomingEvents">
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
            </div>
        </div>
    );
  }
};