import React from 'react';
import '../stylesheet/Header.css'

function Header() {
    return (
        <div className="header">
            <h1 className="header-title">iSell</h1>
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