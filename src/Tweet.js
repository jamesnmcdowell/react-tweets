import React from 'react';

let Tweet = ({ tweet }) =>
    <div className="tweet">
        <img className="avatar" src={tweet.userId.avatar}/>
        <div className="tweet-content">
            <div className="tweet-header">
                <span className="tweet-name">{tweet.userId.name}</span>
                <span className="tweet-screen-name">{tweet.userId.screen_name}</span>
                <span className="tweet-date">April 6</span>
            </div>
            <span className="tweet-text">{tweet.text}</span>
        </div>
    </div>

export default Tweet;
 
