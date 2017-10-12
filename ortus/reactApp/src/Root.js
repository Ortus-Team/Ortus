import React from "react";
import {Provider} from "react-redux";
import {hashHistory, Route, Router} from "react-router";
import {Home} from "./modules/Home/Home";
import {HomeLogin} from "./modules/HomeLogin/HomeLogin";
import {EventPage} from "./modules/EventPage/EventPage";
import {EventsDirectory} from "./modules/EventsDirectory/EventsDirectory";
import {GroupPage} from "./modules/GroupPage/GroupPage";
import {GroupPage2} from "./modules/GroupPage2/GroupPage2";
import { GroupsDirectory } from "./modules/GroupsDirectory/GroupsDirectory";
import configureStore from "./configureStore";

const store = configureStore();

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={HomeLogin}/>
                    <Route path="/event" component={EventPage}/>
                    <Route path="/events" component={EventsDirectory}/>
                    <Route path="/group" component={GroupPage2}/>
                    <Route path="/groups" component={GroupsDirectory}/>
                </Router>
            </Provider>
        );
    }
}

export default Root;
