import React from 'react';
import '../stylesheet/Main.css'

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

            <div className="trending">
            <div>
                <h2 className="trending-title">What's Trending?</h2>
            </div>
            <div className="trending-image-container">                
                <div>
                    <h3 className="trending-footer-image"></h3>
                    <h3>Business / Work</h3>
                </div>
                <div>
                    <h3 className="trending-footer-image"></h3>
                    <h3>Toys, Games & Hobbies</h3>
                </div>
                <div>
                    <h3 className="trending-footer-image"></h3>
                    <h3>Sport Goods</h3>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Popular;
