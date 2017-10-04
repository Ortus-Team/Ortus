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

                {/* Search 
                <div className='search'>
                    <a href="#">Search</a>
                </div> */}

                {/* Main links */}
                <div className='mainLinks'>
                    <a href="#">Search</a>
                    <a href="#">Student Group Directory</a>
                    <a href="#">Events</a>
                </div>

                {/* Account */}
                <div className='account'>
                    <a href="#">Log In</a>
                    <a className='signup' onClick={this.props.on}>Sign up</a>
                </div>

                {/* Translate
                <div className='translate'>
                    <a href="#">Translate</a>
                </div> */}
            </div>
        </div>
    );
  }
};