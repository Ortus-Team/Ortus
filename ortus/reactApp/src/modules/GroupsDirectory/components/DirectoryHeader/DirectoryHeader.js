var React = require('react');
import { styles } from './DirectoryHeader.scss';

export class DirectoryHeader extends React.Component {
  render() {
    return (
        <div className='dirHeadWrapper'>
          <div className='dirHeadContent'>
            <h1>Student Groups Directory (?)</h1>
          </div>
        </div>
    );
  }
};