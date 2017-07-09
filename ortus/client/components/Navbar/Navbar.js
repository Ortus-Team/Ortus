var React = require('react');
var ReactDOM = require('react-dom');

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
    return (
        <div id={styles.navbar}>
            {/* Logo */}
            <div id={styles.logo}>
                <a href="#">Logo</a>
            </div>

            {/* Search */}
            <div id={styles.search}>
                <a href="#">Search</a>
            </div>

            {/* Main links */}
            <div id={styles.nav}>
                <a href="#">Student Group Directory</a>
                <a href="#">Events</a>
                <a href="#">Login</a>
            </div>

            {/* Translate */}
            <div id={styles.translate}>
                <a href="#">Translate</a>
            </div>

        </div>
    );
  }
};