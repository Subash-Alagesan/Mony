import React from 'react';
import VideoCard from '../Dashboard/VideoCard'; // Assuming you have a VideoCard component
import ImageCard from '../Dashboard/ImageCard'; // Assuming you have an ImageCard component

const ProductPage = () => {
  return (
    <div>
      {/* Video Card */}
      <VideoCard />

      {/* Image Fetching Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <ImageCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
