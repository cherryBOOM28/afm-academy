import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={{ width: '100%', maxWidth: '592px', margin: '0 auto' }}>
      <iframe
        width="100%"
        height="275"
        src="https://www.youtube-nocookie.com/embed/PtLz0ZSKmBM?controls=0&amp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;