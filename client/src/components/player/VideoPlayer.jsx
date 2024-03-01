import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <iframe
        width="100%"
        height="100%"
        src="https://videos.sproutvideo.com/embed/7090d7b41f1ee9c9f9/143d80e3bde17d37"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;