import React from 'react';

function Header() {
    return (
        <div className="header">
            <h1>iSell</h1>
            <div className="btn-container">
                <button className="post-btn">Post an Item</button>
                <button className="getpost-btn">My Posts</button>
                <button className="signin-btn">Sign In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </div>
    )
}

export default Header;