import React from 'react';
import logo from './../../../src/logo.svg';

export const Page404 = () => {
    return (
        <div className="mainbox">
            <div className="oops">
                <h2>Oops! Page not found.</h2>
            </div>
            <div className="number">
                <h1>4</h1>
                <h1>0</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>4</h1>
            </div>
            <div className="msg">
                <p>We can´t find the page you´re looking for.</p>
                <a href="https://www.youtube.com/">Go back home</a>
            </div>
        </div>
    );
};
