// ImageGallery.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/Assets'); // Assuming your images are served from the root of your server
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={`/Assets/${image}`} alt={`Image ${index + 1}`} />
          <p>{image}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

