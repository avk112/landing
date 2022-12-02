import React from 'react';
import videoImg from "../image/video-bg.jpg";
import videoBtn from "../image/play-icon.png";
import autographImg from "../image/signature.png";

const VideoArea = ({myRef}) => {
    return (
        <div className="video-area" ref={myRef}>
            <div className="video-area__video">
                <img className="video-area__video__background" src={videoImg}/>
                <img className="video-area__video__btn" src={videoBtn}/>
            </div>
            <div className="video-area__description">
                <h6 className="video-area__description__header">LIVE COFFEE MAKING PROCESS.</h6>
                <h1 className="video-area__description__h1">We Telecast our Coffee Making Live</h1>
                <p className="video-area__description__bold">We are here to listen from you deliver exellence</p>
                <p className="video-area__description__grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                <img className="video-area__description__autograph" src={autographImg}/>
            </div>

        </div>
    );
};

export default VideoArea;