// ImageGallery.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery2 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const charactersResponse = await axios.get('/Assets/Characters');
        const backgroundResponse = await axios.get('/Assets/Background');

        // Add subdirectory information to each image
        const charactersImages = charactersResponse.data.map(image => `Characters/${image}`);
        const backgroundImages = backgroundResponse.data.map(image => `Background/${image}`);

        // Concatenate the image filenames from both subdirectories
        const allImages = [...charactersImages, ...backgroundImages];

        setImages(allImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="image-gallery-container">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={`/Assets/${image}`} alt={`Image ${index + 1}`} />
          <p>{image}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery2;
