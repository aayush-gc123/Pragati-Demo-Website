import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './gallery.css';

const Gallery = () => {
  const { className } = useParams();
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(null);

  const classes = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);
  const photos = className
    ? Array.from({ length: 10 }, (_, i) => `https://via.placeholder.com/600x400?text=${className}+Photo+${i + 1}`)
    : [];

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToClassGallery = (className) => {
    history.push(`/gallery/${className.toLowerCase().replace(/\s/g, '-')}`);
  };

  const backToGallery = () => {
    history.push('/gallery');
  };

  return (
    <div className="gallery-section">
      {!className ? (
        <>
          <h2>School Photo Gallery</h2>
          <div className="gallery-container">
            {classes.map((className, index) => (
              <div className="gallery-item" key={index} onClick={() => goToClassGallery(className)}>
                <img src={`https://via.placeholder.com/300x200?text=${className}`} alt={className} />
                <h3>{className}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>{className}</h2>
          <div className="back-button">
            <button onClick={backToGallery}>Back to Gallery</button>
          </div>
          <div className="gallery-class-container">
            {photos.map((photo, index) => (
              <div className="gallery-class-item" key={index}>
                <img src={photo} alt={`${className} ${index + 1}`} onClick={() => openLightbox(photo)} />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div className="lightbox" onClick={closeLightbox}>
              <img src={selectedImage} alt="Selected" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;

