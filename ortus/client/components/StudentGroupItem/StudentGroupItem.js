var React = require('react');
var ReactDOM = require('react-dom');

/*
Student Group Item (*S*)
  Logo
  Name
  Category tags
  Size tag
*/

export class StudentGroupItem extends React.Component {
  render() {
    return (
        <div id={styles.group}>
            {/* Cover Image */}
            <div id={styles.image}>
                <img src="#" alt="group_name" />
            </div>

            {/* Logo */}
            <div id={styles.logo}>
                <img src="#" alt="logo" />
            </div>

            {/* Label */}
            <div id={styles.label}>
                <h2>Name of Group</h2>

                {/* Tags */}
                <div id={styles.tags}>
                    <div id={styles.categories}>
                    </div>
                    <div id={styles.size}>
                    </div>
                </div>

            </div>

        </div>
    );
  }
};