var React = require('react');
var ReactDOM = require('react-dom');

/*
Event Item (*S*)
  Date
  Image
  Title
  Student Group
  Location
  Short Description?
*/

export class EventItem extends React.Component {
  render() {
    return (
        <div id={styles.event}>
            {/* Image */}
            <div id={styles.image}>
                <img src="#" alt="image" />
            </div>

            {/* Date */}
            <div id={styles.date}>
                <p>Month Day</p>
            </div>

            {/* Logo */}
            <div id={styles.logo}>
                <img src="#" alt="logo" />
            </div>

            {/* Tags */}
            <div id={styles.tags}>
                <div id={styles.categories}>
                </div>
                <div id={styles.size}>
                </div>
            </div>

        </div>
    );
  }
};