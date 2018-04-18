import React from 'react';

let Tweet = ({ tweet }) =>
    <div>
        <p>{tweet.text}</p>
        <p>{tweet.user.name}</p>
    </div>

export default Tweet;