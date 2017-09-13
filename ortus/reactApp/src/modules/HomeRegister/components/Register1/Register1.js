var React = require('react');
var ReactDOM = require('react-dom');

import { styles } from './Register1.scss';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  register1
  Translate
*/

export class Register1 extends React.Component {
  render() {
    return (
        <div className='register1Wrapper'>
          <div className='overlay' />
          <div className='register1Box'>
            <div className='register1Content'>
              <h2>Sign up</h2>
              <button className='register1Google'>Sign up with Google</button>
              <h3>Already have an account? <a href='#' className='login'>Log in</a></h3>
            </div>
          </div>
        </div>
    );
  }
};