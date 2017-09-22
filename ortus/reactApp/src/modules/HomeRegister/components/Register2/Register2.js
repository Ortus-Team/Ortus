var React = require('react');
var ReactDOM = require('react-dom');

import { styles } from './Register2.scss';

/*
NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  register1
  Translate
*/

export class Register2 extends React.Component {
  render() {
    return (
        <div className='register2Wrapper'>
          <div className='overlay' />
          <div className='register2Box'>
            <div className='register2Content'>
              <h2>Sign up</h2>
              <button className='register2Google'>Sign up with Google</button>
              <h3>Already have an account? <a href='#' className='login'>Log in</a></h3>
            </div>
          </div>
        </div>
    );
  }
};