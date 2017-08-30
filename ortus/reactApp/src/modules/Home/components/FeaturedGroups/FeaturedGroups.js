var React = require('react');

import { StudentGroupItem } from './components/StudentGroupItem/StudentGroupItem';
import { styles } from './FeaturedGroups.scss';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class FeaturedGroups extends React.Component {
  render() {
    return (
        <div className="sectionWrapper">
            <h1>Featured Groups</h1>
            <div className="featuredGroups">
              <StudentGroupItem />
              <StudentGroupItem />
              <StudentGroupItem />
              <StudentGroupItem />
            </div>
        </div>
    );
  }
};