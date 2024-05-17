import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: "Library",
    description: "Our library offers a vast collection of books and digital resources to support the academic and personal growth of our students.",
    image: "https://via.placeholder.com/600x400?text=Library"
  },
  {
    title: "Science Lab",
    description: "Our state-of-the-art science labs provide hands-on learning experiences in physics, chemistry, and biology.",
    image: "https://via.placeholder.com/600x400?text=Science+Lab"
  },
  {
    title: "Sports Facility",
    description: "We have a modern sports complex that includes facilities for football, basketball, cricket, and athletics.",
    image: "https://via.placeholder.com/600x400?text=Sports+Facility"
  },
  {
    title: "Music Room",
    description: "Our music room is equipped with various instruments and offers lessons in vocal and instrumental music.",
    image: "https://via.placeholder.com/600x400?text=Music+Room"
  },
  {
    title: "Art Studio",
    description: "Our art studio provides a creative space for students to explore and develop their artistic talents.",
    image: "https://via.placeholder.com/600x400?text=Art+Studio"
  },
  {
    title: "Computer Lab",
    description: "Our computer lab is equipped with the latest technology to enhance the digital literacy of our students.",
    image: "https://via.placeholder.com/600x400?text=Computer+Lab"
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Facilities</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
