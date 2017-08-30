var React = require('react');

import { Navbar } from './components/Navbar/Navbar';
import { DirectoryHeader } from './components/DirectoryHeader/DirectoryHeader';
import { Filters } from './components/Filters/Filters';
import { StudentGroups } from './components/StudentGroups/StudentGroups';
import { styles } from './GroupsDirectory.scss';

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

export class GroupsDirectory extends React.Component {
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
          <StudentGroups />
        </div>
      </div>
    );
  }
};