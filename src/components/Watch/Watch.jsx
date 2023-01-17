import React, { lazy, Suspense } from 'react';
import watchscreen1 from "../../images/watch-screen1.png";
import watcharrow from "../../images/watch-arrow.png";
import winabean from "../../images/win-a-bean.png";
import watchman from "../../images/watch-man.png";
import enternow from "../../images/enter-now-button.png";
// import VideoShow from "../VideoShow/VideoShow";
import { Watch } from "../../constants/Watch";
import "./index.css";

const VideoShow = lazy(() => import('../VideoShow/VideoShow'));

const WatchComponent = () => {
    return (
        <div className="watch" id='watch'>
            <div className="diagram" >
                <div className="watchscreen">
                    <img src={watchscreen1} alt="" />
                    <div className="videodiv">
                        <Suspense fallback={<div>Loading...</div>}>
                            <VideoShow />
                        </Suspense>
                    </div>
                </div>
                <div className="titlescreen">
                    <div className="watchtitle">
                        <p className="firsttitle">{Watch.title1}</p>
                        <p className="secondtitle">{Watch.title2}</p>
                        <img src={watcharrow} alt="" />
                    </div>
                    <div className="winabean">
                        <img src={winabean} alt="" />
                    </div>
                </div>
            </div>
            <div className="active">
                <div className="watchman">
                    <img src={watchman} alt="" />
                </div>
                <div className="activecontents">
                    <div className="activedescription">
                        <p>{Watch.text2}</p>
                        <p>{Watch.text3}</p>
                        <p>{Watch.text4}</p>
                        <p>{Watch.text5}</p>
                    </div>
                    <div className="enternow">
                        <a href="">
                            <img src={enternow} alt="" />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WatchComponent;