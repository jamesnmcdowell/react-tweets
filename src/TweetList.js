import React from 'react';
import Tweet from './Tweet';

let TweetList = ({ tweets }) =>
    <div className="tweet-list">
        {tweets.map(tweet =>
            <Tweet
                tweet={tweet} />
        )}
    </div>

export default TweetList;