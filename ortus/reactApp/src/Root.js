import React from "react";
import {Provider} from "react-redux";
import {hashHistory, Route, Router} from "react-router";
import {Home} from "./modules/Home/Home";
import {EventPage} from "./modules/EventPage/EventPage";
import {EventsDirectory} from "./modules/EventsDirectory/EventsDirectory";
import {GroupPage} from "./modules/GroupPage/GroupPage";
import {GroupPage2} from "./modules/GroupPage2/GroupPage2";
import {GroupsDirectory} from "./modules/GroupsDirectory/GroupsDirectory";
import configureStore from "./configureStore";

const store = configureStore();

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="/events" component={EventPage}/>
                    <Route path="/event-dir" component={EventsDirectory}/>
                    <Route path="/groups" component={GroupPage}/>
                    <Route path="/groups2" component={GroupPage2}/>
                    <Route path="/groups-dir" component={GroupsDirectory}/>
                </Router>
            </Provider>
        );
    }
}

export default Root;
