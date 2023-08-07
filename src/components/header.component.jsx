import React from 'react';
import "./header.styles.css";
const HeaderComponent = (props) => {
    return (
        <div className="topNav">
            <div className="MenuOptions">
                <span>Home</span>
                <span>Contact Us</span>
                <span>About</span>
            </div>
            { !props.isLoggedIn && <div className="authenticationOptions">
                <span onClick={props.loginHandler}>Login</span>
                <span>Sign Up</span>
            </div>
            }
            { props.isLoggedIn && <div className="authenticationOptions">
                <span onClick={props.logOutHandler}>Logout</span>
            </div>
            }
        </div>
    );
};

export default HeaderComponent;