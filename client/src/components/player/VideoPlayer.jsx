import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={{ margin: '0 auto' }}>
        <iframe class='sproutvideo-player' src='https://videos.sproutvideo.com/embed/7090d7b41f1ee9c9f9/143d80e3bde17d37?autoPlay=true&amp;playerColor=00a2ff&amp;loop=true' width='640' height='425' frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'></iframe>    </div>
  );
};

export default VideoPlayer;