// ImageGallery.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('/Assets/Characters/blue_dragon.png');
        setImageUrl(response.data);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Example" />
          <p>Example Image</p>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

