import React from 'react';
import crow from './../../img/Scarecrow.png';

export const Page404 = () => {
    return (
        <div className="page404__container">
            <div className="page404__name">
                <p>404 NOT FOUND</p>
            </div>
            <div className="page404__main">
                <div className="page404__img">
                    <img src={crow} alt={crow}/>
                </div>
                <div className="page404__info">
                    <div className="page404__title">
                        <p>I have bad news for you</p>
                    </div>
                    <div className="page404__description">
                        <p>The page you are looking for might be removed or is temporarily unavailable</p>
                    </div>
                    <div className="page404__back">
                        <a href="/">BACK TO HOMEPAGE</a>
                    </div>
                </div>
            </div>
            <footer>
                <div className="page404__footer">
                    <a href="https://github.com/Emasesosos" target="_blank"rel="noopener noreferrer">Emasesosos</a>
                    <p>@</p>
                    <a href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer">DevChallenges.io</a>
                </div>
            </footer>
        </div>
    );
};
