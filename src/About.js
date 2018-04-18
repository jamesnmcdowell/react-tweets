import React from 'react';
import TweetList from './TweetList';

let About = ({tweets}) => 
    <TweetList tweets={tweets} />

export default About;



// import React, { Component } from 'react';
// import BlogPostList from './BlogPostList';

// class BlogPostListState extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { blogBeingEdited: null, tweets: [] };
//     }
//     componentDidMount() {
//         this.fetchData();
//     }
//     async fetchData() {
//         let tweets = await (await fetch('http://localhost:3000/tweets')).json();
//         this.setState({ tweets })
//     }
//     render() {
//         let { tweets, blogBeingEdited } = this.state;
//         return (
//             <TweetList
//                 {...this.props }
//                 { ...this.state}
//                 />
//         );
//     }
// }

// export default BlogPostListState;

