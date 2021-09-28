import React from 'react';
import '../stylesheet/Main.css'
import Trending from '../components/Trending';
import Popular from '../components/Popular';
function Main() {
    return (
        <div className="main">
            <Popular/>
            <Trending/>
        </div>
    )
}

export default Main;
