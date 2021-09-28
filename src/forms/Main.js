import React from 'react';
import '../stylesheet/Main.css'
import Popular from '../components/Popular';
import MyPosts from './MyPosts';
import Signin from './Signin';
import Signup from './Signup';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Main() {
    return (
        <Router>
            <div>
                <div className="header">
                    <Link to="/">
                        <div className="header-title">
                            <h1>iSell</h1>
                        </div>
                    </Link>
                    <Link to="/post">
                        <div className="header-btn">
                            <button>Post Item</button>
                        </div>
                    </Link>
                    <Link to="/myposts">
                        <div className="header-btn">
                            <button>My Posts</button>
                        </div>
                    </Link>
                    <Link to="/signin">
                        <div className="header-btn">
                            <button>Sign In</button>
                        </div>
                    </Link>
                    <Link to="/signup">
                        <div className="header-btn">
                            <button>Sign Up</button>
                        </div>
                    </Link>
                </div>   
            </div>
            <div className="main">
                <Switch>
                    <Route path="/" exact component={Popular}/>
                    <Route path="/Signin" component={Signin}/>
                    <Route path="/Signup" component={Signup}/>
                    <Route path="/Myposts" component={MyPosts}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Main;
