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
                        <img src="#" alt="group_name" />
                    </div>

                    {/* Logo */}
                    <div className="groupHeaderLogo">
                        <img src="#" alt="logo" />
                    </div>

                    {/* Label */}
                    <div className="groupHeaderText">
                        <div className="groupHeaderMainText">
                            <h3 className="groupName">Name of Group</h3>
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
            </div>

        </div>
    );
  }
};