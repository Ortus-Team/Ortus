var React = require('react');
var ReactDOM = require('react-dom');

var QuoteMaker = React.createClass({
  render: function () {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="http://bit.ly/1WGzM4G">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
});

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

/*

NavBar (On all pages)
  Logo (link: Home)
  Search
  Student Group Directory
  Events
  Login
  Translate

Student Group Item (*S*)
  Logo
  Name
  Category tags
  Size tag

Event Item (*S*)
  Date
  Image
  Title
  Student Group
  Location
  Short Description?

------ NOT LOGGED IN ------

Home
  NavBar
  Content
    Dynamic Content
    Upcoming Events
    Featured Student Groups
    Get Involved

Student Group Directory
  NavBar
  Filters
    Category (Select)
    Size (Select)
    # of Groups (i.e., results)
    Sort by:
  Content
    Student Group Items

Events
  NavBar
  Filters
    Grid vs. List
    Sort by:
  Content
    Event Items

Event Page
  NavBar
  Content
    Breadcrumbs?
    Event Info
      Date
      Image
      Title
      Student Group
      Location
      Description
      RSVP
        Going
        Following
    Related Events
      Event Items

Student Group Page
  NavBar
  Content
    Overview
      Cover Image
      Logo
      Title
      Follower and Member Data
      Join or Follow
    Menu
      Overview
        About Us
        Upcoming Event
        Feed
          Feed Items
            Title
            Author
            Date Posted
            Content
              Text
              Media
      Events
        Upcoming Events
          Event Items
        Past Events
          Event Items
      Officers
        Officer Items
          Name
          Position
      Gallery
        Album Items
          Cover Image
          Title
          Size (Number of Images)
      Members
        Filters
          Search
          Year
          Member Since
        Invite Member
        Member List
          Member List Items
            Profile Image
            Name
            Native Language Name (optional)
            Email
            Year in School
            Member Since
  
------ LOGGED IN ------

Dashboard

Settings (side-wite profile/login settings)

Admin Pages (Event + Edit Event, Student Group Page)

*/