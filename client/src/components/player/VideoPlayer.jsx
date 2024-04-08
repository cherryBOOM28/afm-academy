import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={{ margin: '0 auto' }}>
      <iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/4490d4ba111de4c8cd/d99d71c96e9466e8?autoPlay=true&amp;bigPlayButton=false&amp;loop=true' width='600' height='347' frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe>
    </div>
  );
};

export default VideoPlayer; 