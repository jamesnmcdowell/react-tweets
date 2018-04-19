import React, { Component } from 'react';
import TweetList from './TweetList';

class GroupFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { tweets: [] };
    }
    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        let tweets = await (await fetch('http://localhost:3000/tweets')).json();
        let users = await (await fetch('http://localhost:3000/users')).json();

        let tweetsJoined = tweets.map( tweet => {
            let idMatch = users.find(user => user.userId === tweet.userId);
            tweet.userId = idMatch;
            return tweet;
        });
        // console.log(updatedArr);
        this.setState({ tweets: tweetsJoined});
    }

    render() {
        let { tweets, users} = this.state;
        return (
            <TweetList tweets={tweets}  />
        );
    }
}

export default GroupFeed;

/*
<TweetList
    {...this.props }
    { ...this.state}
/>
*/