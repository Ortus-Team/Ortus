var React = require('react');

import { styles } from './GroupHeader.scss';
/*
Student Group Item (*S*)
  Logo
  Name
  Category tags
  Size tag
*/

export class GroupHeader extends React.Component {
  render() {
    return (
        <div className="groupHeader">
            <div className="groupHeaderWrapper">
                <div className="groupHeaderContent">
                    {/* Cover Image */}
                    <div className="groupHeaderImage">
                        <img src="#" alt="group_header_image" />
                    </div>

                    {/* Logo */}
                    <div className="groupHeaderLogo">
                        <img src="#" alt="logo" />
                    </div>

                    {/* Label */}
                    <div className="groupHeaderText">
                        <div className="groupHeaderMainText">
                            <h2 className="groupName">Name of Group</h2>
                            <h4 className="followers"># Followers</h4>
                            <h4 className="members"># Members</h4>
                        </div>

                        {/* Tags */}
                        <div className="groupHeaderTags">
                            <div className="groupHeaderCats">
                            </div>
                            <div className="groupHeaderSize">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="groupHeaderMenu">
                    <div className="groupHeaderTab">
                        <a href="#">Overview</a>
                    </div>
                    <div className="groupHeaderTab">
                        <a href="#">Events</a>
                    </div>
                    <div className="groupHeaderTab">
                        <a href="#">Officers</a>
                    </div>
                    <div className="groupHeaderTab">
                        <a href="#">Gallery</a>
                    </div>
                </div>
            </div>

        </div>
    );
  }
};