import React from 'react';

import { EventItem } from './components/EventItem/EventItem';
// import { EventItem } from 'components/EventItem/EventItem';
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
        <div className="sectionWrapper">
            <h1>More Events</h1>
            <div className="upcomingEvents">
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
              <EventItem />
            </div>
        </div>
    );
  }
};