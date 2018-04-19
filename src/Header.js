import React from 'react';
import { Link } from 'react-router-dom';

const logo = 'https://cdn2.iconfinder.com/data/icons/miscellaneous-12/24/miscellaneous-64-256.png';

let Header = () =>
    <div className="nav-bar">
        <img className="logo" src={logo} />
        <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/users/tweets">Group Feed</Link>
            <Link to="/users/james/tweets">User Feed</Link>
            <Link to="/users/james">Profile</Link>

        </div>
    </div>

export default Header;
