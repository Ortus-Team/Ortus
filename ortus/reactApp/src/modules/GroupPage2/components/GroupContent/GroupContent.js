var React = require('react');
import { EventItem } from './components/EventItem/EventItem';

import styles from './GroupContent.scss'
/*
Student Group Item (*S*)
  Logo
  Name
  Category tags
  Size tag
*/

export class GroupContent extends React.Component {
  render() {
    return (
        <div className='groupContent'>
            <div className='groupContentWrapper'>
                <div className="groupContentContent">
                    <div className="groupPageTopContent">
                        {/* About Us */}
                        <div className="groupPageAbout">
                            <h3 className='groupSectionHeading'>About Us</h3>
                            <p className='groupSectionDescription'>This is what were about. Lorem Khaled Ipsum is a major key to success. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. We don’t see them, we will never see them. Don’t ever play yourself. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion!</p>
                        </div>
                        <div className="groupPageFeed">
                            <h3 className='groupSectionHeading'>Feed</h3>
                            <div className="groupPageFeedContent">
                                <p className='groupSectionDescription'>Nothing yet!</p>
                            </div>
                        </div>
                        <div className="groupPageEvent">
                            <h3 className='groupSectionHeading'>Upcoming Event</h3>
                            <div className="groupUpcomingEvent"><EventItem /></div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
  }
};