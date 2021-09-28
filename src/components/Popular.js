import React from 'react';
import '../stylesheet/Main.css'
import Trending from '../components/Trending';

function Popular() {
    return (
        <div className="main">
            <div>
                <h1 className="main-title">Popular on iSell...</h1>
            </div>
            <div className="main-popular-container">
                <div>
                    <h3 className="main-popular-heading">Free Things</h3>
                </div>
                <div>
                    <h3 className="main-popular-heading">Pets</h3>
                </div>
                <div>
                    <h3 className="main-popular-heading">Sport Gear</h3>
                </div>
                <div>
                    <h3 className="main-popular-heading">Freelancing</h3>
                </div>
            </div>
            <div>
                <input class="main-searchbar" placeholder="Search For Something..."></input>
            </div>
        </div>
    )
}

export default Popular;
