var React = require('react');
var ReactDOM = require('react-dom');

import { Category } from './components/Category/Category';
import { styles } from './Explore.scss';
/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class Explore extends React.Component {
  render() {
    return (
      <div className="sectionWrapper">
        <h1>Find your niche</h1>
        <div className="expContent">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
        <div className="expContent">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    );
  }
};