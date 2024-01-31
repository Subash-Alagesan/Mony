import React, { useState } from 'react';

const VideoModal = ({ onClose, videoUrl }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <iframe
          title="Product Video"
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VideoModal;
