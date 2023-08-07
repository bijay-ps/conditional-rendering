import React from 'react';
import "./welcome.styles.css";
import CounterComponent from "./counter.component";

const WelcomeComponent = (props) => {
    return (
        <>
            {!props.isLoggedIn && <div className="welcome-container">
                Welcome to our website!! Please login to use our application.
            </div>}
            {props.isLoggedIn && <CounterComponent/>}
        </>
    );
};

export default WelcomeComponent;