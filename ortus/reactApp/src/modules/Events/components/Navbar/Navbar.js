var React = require('react');
var ReactDOM = require('react-dom');

import { styles } from './Navbar.scss';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate
*/

export class Navbar extends React.Component {
  render() {
    const navbar = {
        fontFamily: 'Arial'
    }
    
    return (
        <div className='navbar'>
            <div className='navbarContainer'>
                {/* Logo */}
                <div className='logo'>
                    <a href="#">Logo</a>
                </div>

                {/* Search */}
                <div className='search'>
                    <a href="#">Search</a>
                </div>

                {/* Main links */}
                <div className='mainLinks'>
                    <a href="#">Student Group Directory</a>
                    <a href="#">Events</a>
                    <a href="#">Login</a>
                </div>

                {/* Translate */}
                <div className='translate'>
                    <a href="#">Translate</a>
                </div>
            </div>
        </div>
    );
  }
};