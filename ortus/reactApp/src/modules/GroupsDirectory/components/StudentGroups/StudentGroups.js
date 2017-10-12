var React = require('react');

import { StudentGroupItem } from 'src/components/StudentGroupItem/StudentGroupItem';
import { styles } from './StudentGroups.scss';

export class StudentGroups extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <div className="topStudentGroups">
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
        </div>
        <div className="studentGroups">
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
        </div>
        <div className="studentGroups">
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
          <StudentGroupItem />
        </div>
      </div>
    );
  }
};