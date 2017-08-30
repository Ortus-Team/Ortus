var React = require('react');
import { styles } from './DirectoryHeader.scss';

export class DirectoryHeader extends React.Component {
  render() {
    return (
        <div className='dirHeadWrapper'>
          <div className='dirHeadContent'>
            <h1>Upcoming Events</h1>
          </div>
        </div>
    );
  }
};