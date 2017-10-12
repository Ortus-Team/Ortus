var React = require('react');

import { Navbar } from 'src/components/Navbar/Navbar';
import { GroupHeader } from './components/GroupHeader/GroupHeader';
import { GroupHeader2 } from './components/GroupHeader2/GroupHeader2';
import { GroupContent } from './components/GroupContent/GroupContent';
import { GroupContentEvents } from './components/GroupContentEvents/GroupContentEvents';
import { GroupContentOfficers } from './components/GroupContentOfficers/GroupContentOfficers';
import { GroupContentGallery } from './components/GroupContentGallery/GroupContentGallery';


import { styles } from './GroupPage2.scss'
/*
Student Group Page
  NavBar
  Content
    Main
      Cover Image
      Logo
      Title
      Follower and Member Data
      Join or Follow
    Menu
      Overview
        About Us
        Upcoming Event
        Feed
          Feed Items
            Title
            Author
            Date Posted
            Content
              Text
              Media
      Events
        Upcoming Events
          Event Items
        Past Events
          Event Items
      Officers
        Officer Items
          Name
          Position
      Gallery
        Album Items
          Cover Image
          Title
          Size (Number of Images)
      Members
        Filters
          Search
          Year
          Member Since
        Invite Member
        Member List
          Member List Items
            Profile Image
            Name
            Native Language Name (optional)
            Email
            Year in School
            Member Since
*/

export class GroupPage2 extends React.Component {
  render() {
    return (
      <div className='groupPage2Wrapper'>
        <Navbar />
        {/* <GroupHeader2 /> */}
        <div className='groupPage2Content'>
          <GroupHeader2 />
          <div className='groupPage2ContentWidth'>
            <GroupContent />
          </div>
        </div>
      </div>
    );
  }
};