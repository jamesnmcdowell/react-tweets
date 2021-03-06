import React, { Component } from 'react';
import TweetList from './TweetList';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { profileData: [] };
    }
    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        let { match } = this.props;
        let tweets = await (await fetch('http://localhost:3000/tweets')).json();
        let users = await (await fetch('http://localhost:3000/users')).json();

        let tweetsJoined = tweets.map(tweet => { 
            let idMatch = users.find(user => user.userId === tweet.userId);
            tweet.userId = idMatch;
            return tweet;
        });

        let tweetObj = tweets.find(tweet => tweet.userId.name === match.params.username);
        let profileData = tweetObj.userId;
        this.setState({ profileData: profileData })

    }

    render() {
        let { match } = this.props;
        let { profileData} = this.state;
        return (
            <div>
                <h1>Welcome to {match.params.username}'s profile!</h1>
            </div>
        );
    }
}

export default Profile;