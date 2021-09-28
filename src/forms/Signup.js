import React from 'react';
import '../stylesheet/Signup.css';

function Signup() {
    return (
           <div className="signup">
            <div className="signup-container">
                <input class="signup-input" placeholder="Username / Email"></input>
                <input class="signup-input" placeholder="Password"></input>
                <input class="signup-input" placeholder="Retype Password"></input>
                <div>
                    <button className="signin-button">Sign Up</button>
                </div>
                <div>
                    <h3 className="have-account-link">Already have an account?</h3>
                </div>
            </div>
        </div> 
    )
}

export default Signup
