import React, { Component } from 'react';
import TweetList from './TweetList';
import EnhancedForm, { TweetForm } from './TweetForm'

class UserFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { tweets: [] };
    }
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username)   {
            this.state = { tweets: [] };
            this.fetchData();
        }
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
        let filteredTweets = tweetsJoined.filter(tweet => tweet.userId.name === match.params.username);
        this.setState({ tweets: filteredTweets })
    }

    render() {
        let { tweets } = this.state;
    
        return (
            <div>
                <TweetList tweets={tweets} />
                <EnhancedForm
                    tweets={tweets}
                    initialState={{
                        text: '',
                        url: ''
                    }}
                />
            </div>
        );
    }
}

export default UserFeed;