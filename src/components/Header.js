import React from 'react';
import '../stylesheet/Header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
    return (
        <Router>
            <div className="header">
                <div>
                    <h1 className="header-title">iSell</h1>
                </div>
                <div className="header-btn-container">
                    <div>
                        <button className="header-btn">Post an Item</button>
                    </div>
                    <div>
                        <button className="header-btn">My Posts</button>
                    </div>              
                    <div>
                        <button className="header-btn">Sign In</button>
                    </div>
                    <div>
                        <button className="header-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Header;