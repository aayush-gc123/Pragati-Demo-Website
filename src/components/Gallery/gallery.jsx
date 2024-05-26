import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const classes = [
    'Nursery', 'KG', 'Class 1', 'Class 2', 'Class 3', 'Class 4',
    'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'
  ];

  const photos = {
    'Nursery': [
      'https://source.unsplash.com/600x400/?nursery,school',
      'https://source.unsplash.com/600x400/?kids,play',
      'https://source.unsplash.com/600x400/?nursery,classroom'
    ],
    'KG': [
      'https://source.unsplash.com/600x400/?kindergarten,school',
      'https://source.unsplash.com/600x400/?kids,learning',
      'https://source.unsplash.com/600x400/?kindergarten,classroom'
    ],
    'Class 1': [
      'https://source.unsplash.com/600x400/?class1,school',
      'https://source.unsplash.com/600x400/?students,classroom',
      'https://source.unsplash.com/600x400/?class1,learning'
    ],
    'Class 2': [
      'https://source.unsplash.com/600x400/?class2,school',
      'https://source.unsplash.com/600x400/?students,education',
      'https://source.unsplash.com/600x400/?class2,learning'
    ],
    'Class 3': [
      'https://source.unsplash.com/600x400/?class3,school',
      'https://source.unsplash.com/600x400/?students,classroom',
      'https://source.unsplash.com/600x400/?class3,learning'
    ],
    'Class 4': [
      'https://source.unsplash.com/600x400/?class4,school',
      'https://source.unsplash.com/600x400/?students,education',
      'https://source.unsplash.com/600x400/?class4,learning'
    ],
    'Class 5': [
      'https://source.unsplash.com/600x400/?class5,school',
      'https://source.unsplash.com/600x400/?students,classroom',
      'https://source.unsplash.com/600x400/?class5,learning'
    ],
    'Class 6': [
      'https://source.unsplash.com/600x400/?class6,school',
      'https://source.unsplash.com/600x400/?students,education',
      'https://source.unsplash.com/600x400/?class6,learning'
    ],
    'Class 7': [
      'https://source.unsplash.com/600x400/?class7,school',
      'https://source.unsplash.com/600x400/?students,classroom',
      'https://source.unsplash.com/600x400/?class7,learning'
    ],
    'Class 8': [
      'https://source.unsplash.com/600x400/?class8,school',
      'https://source.unsplash.com/600x400/?students,education',
      'https://source.unsplash.com/600x400/?class8,learning'
    ],
    'Class 9': [
      'https://source.unsplash.com/600x400/?class9,school',
      'https://source.unsplash.com/600x400/?students,classroom',
      'https://source.unsplash.com/600x400/?class9,learning'
    ],
    'Class 10': [
      'https://source.unsplash.com/600x400/?class10,school',
      'https://source.unsplash.com/600x400/?students,education',
      'https://source.unsplash.com/600x400/?class10,learning'
    ],
    'Class 11': [
      'https://source.unsplash.com/600x400/?class11,school',
      'https://source.unsplash.com/600x400/?students,classroom',
      'https://source.unsplash.com/600x400/?class11,learning'
    ],
    'Class 12': [
      'https://source.unsplash.com/600x400/?class12,school',
      'https://source.unsplash.com/600x400/?students,education',
      'https://source.unsplash.com/600x400/?class12,learning'
    ],
  };

  const handleClassClick = (className) => {
    if (selectedClass === className) {
      setSelectedClass(null);
    } else {
      setSelectedClass(className);
    }
  };

  return (
    <div className="gallery-section">
      <h2>School Gallery</h2>
      <div className="classes-container">
        {classes.map((className, index) => (
          <div 
            key={index} 
            className="class-box" 
            onClick={() => handleClassClick(className)}
          >
            <img src={photos[className][0]} alt={`${className} representative`} />
            <span>{className}</span>
          </div>
        ))}
      </div>
      {selectedClass && (
        <div className="photos-container">
          <h3>{selectedClass} Photos</h3>
          <div className="photos-grid">
            {photos[selectedClass].slice(1).map((photo, index) => (
              <img 
                key={index} 
                src={photo} 
                alt={`${selectedClass} ${index + 1}`} 
                className="photo"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
