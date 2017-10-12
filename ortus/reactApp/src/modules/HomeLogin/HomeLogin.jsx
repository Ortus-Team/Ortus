import React from 'react';
import { Link } from 'react-router';

// import { Navbar } from './components/Navbar/Navbar';
import { DynamicContent } from './components/DynamicContent/DynamicContent';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvents';
import { FeaturedGroups } from './components/FeaturedGroups/FeaturedGroups';
import { Explore } from './components/Explore/Explore';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { styles } from './HomeLogin.scss';

/*
Home
  NavBar
  Content
    Dynamic Content
    Upcoming Events
    Featured Student Groups
    Get Involved
*/

export class HomeLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        styleLogin : {
          display: 'none'
        },
        
        styleRegister: {
          display: 'none'
        }
    };
    this.loginOn = this.loginOn.bind(this);
    this.loginOff = this.loginOff.bind(this);
    this.registerOn = this.registerOn.bind(this);
    this.registerOff = this.registerOff.bind(this);
    this.registerLogin = this.registerLogin.bind(this);
    this.loginRegister = this.loginRegister.bind(this);
  }

  componentDidMount() {
      document.addEventListener("click", this.loginOff);
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.loginOff);
  }
  
  // log in display functions
  loginOn() {
    const styleLogin = { display: 'block' };
    this.setState({ styleLogin });
    // document.addEventListener("click", this.loginOff);
  }

  loginOff() {
    document.removeEventListener("click", this.loginOff);
    const styleLogin = { display: 'none' };
    this.setState({ styleLogin });
  } 

  // register display functions
  registerOn() {
    const styleRegister = { display: 'block' };
    this.setState({ styleRegister });
    // document.addEventListener("click", this.registerOff);
  }

  registerOff() {
    // document.removeEventListener("click", this.registerOff);
    const styleRegister = { display: 'none' };
    this.setState({ styleRegister });
  } 

  registerLogin() {
    const styleRegister = { display: 'none' };
    this.setState({ styleRegister });
    const styleLogin = { display: 'block' };
    this.setState({ styleLogin });
  }

  loginRegister() {
    const styleLogin = { display: 'none' };
    this.setState({ styleLogin });
    const styleRegister = { display: 'block' };
    this.setState({ styleRegister });
  }

  render() {
    return (
      <div className='homeWrapper'>

        <div className='displayLogin' style={this.state.styleLogin}>
          <Login off={this.loginOff} register={this.loginRegister} />
        </div>

        <div className='displayRegister' style={this.state.styleRegister}>
          <Register off={this.registerOff} login={this.registerLogin} />
        </div>

        <div className='homeLoginNavbar'>
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
                  {/* <a href="#">Student Group Directory</a> */}
                  <Link key='groups' to='/groups'>Student Group Directory</Link>
                  <Link key='events' to='/events'>Events</Link>
              </div>

              {/* Account */}
              <div className='account'>
                  <a href="javascript:void(0)" className='login' onClick={this.loginOn}>Log In</a>
                  <a href="javascript:void(0)" className='signup' onClick={this.registerOn}>Sign up</a>
              </div>

              {/* Translate
              <div className='translate'>
                  <a href="#">Translate</a>
              </div> */}
          </div>
        </div>
        </div>
        <div className='homeHeader'>
          <DynamicContent />
        </div>
        <div className='homeContent'>
          <UpcomingEvents />
          <FeaturedGroups />
          <Explore />
        </div>
      </div>
    );
  }
};