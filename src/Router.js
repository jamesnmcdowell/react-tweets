import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import GroupFeed from './GroupFeed';
import UserFeed from './UserFeed';
import Profile from './Profile';


class Router extends Component {
    constructor(props) {
        super(props);
    }

render() {
    return (
        <HashRouter>
            <div>
                <Header />
                <Switch>
                <Route path="/" exact render={() => <Homepage  />} />
                <Route path="/users/tweets" render={() => <GroupFeed  />} />
                <Route path="/users/:username" exact render={({ match }) => <Profile match={match} />} />
                <Route path="/users/:username/tweets" render={({match}) => <UserFeed match={match} />} />
                </Switch>
            </div>
        </HashRouter>
    );
}
}

export default Router;