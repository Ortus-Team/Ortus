var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from 'react-router';

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
                    <Link key='home' to='/'>Logo</Link>
                </div>

                {/* Search 
                <div className='search'>
                    <a href="#">Search</a>
                </div> */}

                {/* Main links */}
                <div className='mainLinks'>
                    <a href="#">Search</a>
                    <Link key='groups' to='/groups'>Student Group Directory</Link>
                    <Link key='events' to='/events'>Events</Link>
                </div>

                {/* Account */}
                <div className='account'>
                    <a href="#">Log In</a>
                    <a href="#" className='signup'>Sign up</a>
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