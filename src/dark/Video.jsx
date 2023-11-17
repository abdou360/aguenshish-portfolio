import React from 'react';

const Video = () => {
  return (
    <div className="bg_video--25">
      <video autoPlay muted loop id="video-background">
        <source src="./dark-abdou.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
