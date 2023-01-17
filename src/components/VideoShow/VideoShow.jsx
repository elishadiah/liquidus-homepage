import React from "react";
import videolink from "../../videos/movie2.mp4";
import ReactPlayer from "react-player";

const WatchComponent = () => {
    var url = "https://youtu.be/KT7F15T9VBI";
    return (
        <ReactPlayer
            url={videolink}
            playing="false"
            controls={true}
            width='100%'
            height='100%'

            config={{
                youtube: {
                    playerVars: { showinfo: 1 }
                }
            }}
        />
    );
};

export default WatchComponent;