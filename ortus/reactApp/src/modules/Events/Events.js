var React = require('react');

import { Navbar } from './components/Navbar/Navbar';
//import { EventsDirectory } from './components/EventsDirectory/EventsDirectory';
import { styles } from './Events.scss';
/*
Events
  NavBar
  Filters
    Grid vs. List
    Sort by:
  Content
    Event Items
*/

export class Events extends React.Component {
  render() {
    return (
      <div className='eventsWrapper'>
        <Navbar />
        <div className='eventsContent'>

        </div>
      </div>
    );
  }
};