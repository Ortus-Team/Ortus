var React = require('react');
var ReactDOM = require('react-dom');

import { styles } from './DynamicContent.scss';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class DynamicContent extends React.Component {
  render() {
    const dc = {
        color: 'red'
    }

    return (
        <div className='dynamicWrapper'>
          <div className='dynamicContent'>
            <h1>Dynamic Content</h1>
          </div>
        </div>
    );
  }
};