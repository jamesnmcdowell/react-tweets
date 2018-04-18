import React from 'react';
import { Link } from 'react-router-dom';

const logo = 'http://paperbackdesign.com/wp-content/uploads/2015/04/generic-logo_150ppi-600x300px.png';

let Header = () =>
    <div className="nav-bar">
        <img className="logo" src={logo} />
        <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/tweets">About</Link>
            <Link to="/users/nybblr">nybblr</Link>
        </div>
    </div>

export default Header;
