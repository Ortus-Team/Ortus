var React = require('react');

import { Navbar } from './components/Navbar/Navbar';
import { DirectoryHeader } from './components/DirectoryHeader/DirectoryHeader';
import { Filters } from './components/Filters/Filters';
import { Events } from './components/Events/Events';
import { styles } from './EventsDirectory.scss';

/*
Student Group Directory
  NavBar
  Filters
    Category (Select)
    Size (Select)
    # of Groups (i.e., results)
    Sort by:
  Content
    Student Group Items 

*/

export class EventsDirectory extends React.Component {
  render() {
    return (
      <div className='dirWrapper'>  
        <Navbar />
        <div className='dirHeader'>
          <DirectoryHeader />
        </div>
        <div className='dirFilters'>
          <Filters />
        </div>
        <div className='dirContent'>
          <Events />
        </div>
      </div>
    );
  }
};