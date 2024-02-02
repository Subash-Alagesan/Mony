// ImageCard.js
import React from 'react';

const ImageCard = () => {

  return (
    <div style={{ width: '100px', margin: '50px', padding: '10px', border: '1px solid #ddd' }}>
      {/* Image */}
      <img src="your-image-url" alt="Product" style={{ width: '50%' }} />

      {/* Description */}
      <p>Description goes here</p>

      {/* Price */}
      <p>Price: $50.00</p>
    </div>
  );
};

export default ImageCard;
