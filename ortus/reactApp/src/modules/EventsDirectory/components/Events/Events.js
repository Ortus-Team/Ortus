var React = require('react');

import { EventItem } from './components/EventItem/EventItem';
import { styles } from './Events.scss';

export class Events extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <div className="topStudentGroups">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
        <div className="studentGroups">
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
        <div className="studentGroups">
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