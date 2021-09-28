import React from 'react';
import '../stylesheet/Trending.css';

function Trending() {
    return (
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
    )
}

export default Trending;