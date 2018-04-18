import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Profile from './Profile';


class Router extends Component {
    constructor(props) {
        super(props);
        this.state = { blogBeingEdited: null, tweets: [] };
    }
    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        let tweets = await (await fetch('http://localhost:3000/tweets')).json();
        this.setState({ tweets })
    }

render() {
    let { tweets, blogBeingEdited } = this.state;
    return (
        <HashRouter>
            <div>
                <Header />
                <Route path="/" exact render={() => <Homepage tweets={tweets} />} />
                <Route path="/tweets" render={() => <About tweets={tweets} />} />
                <Route path="/users/:username" render={({match}) => <Profile tweets={tweets} match={match} />} />
                
            </div>
        </HashRouter>
    );
}
}

export default Router;