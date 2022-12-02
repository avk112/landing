import React from 'react';

const Banner = ({myRef}) => {
    return (
        <div className="banner" ref={myRef}>
            <div className="banner__texts">
                <h6 className="banner__texts__top-text">Now you can feel the energy</h6>
                <h1 className="banner__texts__bottom-text">Start your day with a black  Coffee</h1>
                <button className="banner__buy-btn">Buy now</button>
            </div>

        </div>
    );
};

export default Banner;