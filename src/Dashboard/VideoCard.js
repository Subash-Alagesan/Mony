import React from 'react';

const VideoCard = () => {
  return (
    <div style={{ marginTop: '80px' }}>
      {/* Your video component goes here */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/your-video-id"
        title="Video Title"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
