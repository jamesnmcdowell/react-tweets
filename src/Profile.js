import React from 'react';
import TweetList from './TweetList';

let Profile = ({ match, tweets }) =>
<div>
    <h1>Welcome to {match.params.username}'s profile!</h1>
    <TweetList tweets={tweets}/>
</div>

export default Profile;