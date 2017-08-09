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

export class EventsDirectory extends React.Component {
  render() {
    return (
        <div>
            <div className="eventsDirectory">
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
            </div>
        </div>
    );
  }
};