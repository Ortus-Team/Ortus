var React = require('react');

import { Navbar } from './components/Navbar/Navbar';
import { EventContent } from './components/EventContent/EventContent';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';
import { styles } from './EventPage.scss';

/*
Event Page
  NavBar
  Content
    Breadcrumbs?
    Event Info
      Date
      Image
      Title
      Student Group
      Location
      Description
      RSVP
        Going
        Following
    Related Events
      Event Items
*/

export class EventPage extends React.Component {
  render() {
    return (
      <div className='eventPageWrapper'>
        <Navbar />
        <div className='eventPageContent'>
          <EventContent />
          <UpcomingEvents />
        </div>
      </div>
    );
  }
};