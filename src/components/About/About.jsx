import React from 'react';
import './About.css'; // Import CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>Welcome to <span>Pragati Secondary School</span></h2>
          <p>Unlocking Potential, Empowering Futures</p>
          <p>At Pragati Secondary School, we're committed to providing a transformative educational experience that ignites curiosity, fosters creativity, and cultivates the leaders of tomorrow.</p>
          <p>With our innovative curriculum, state-of-the-art facilities, and dedicated faculty, we inspire excellence and nurture the holistic development of every student.</p>
          <p>Join us as we embark on a journey of discovery, innovation, and endless possibilities!</p>
        </div>
        <div className="about-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4Uf9rCsI3hVGTtcfrxdb3jALcBe3f59slWc5bCD8Nw&s" alt="About Us" />
        </div>
      </div>

      {/* Facilities Section */}
      <div className="facilities-section">
        <h2>Our Facilities</h2>
        <div className="facilities-container">
          <div className="facility">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmuWjGL9j9cG-mx1KqqwiiUOnrRSmGr09JJdPxGyzdg&s" alt="Facility 1" />
            <h3>State-of-the-Art Classrooms</h3>
            <p>Our classrooms are equipped with the latest technology to enhance the learning experience.</p>
          </div>
          <div className="facility">
            <img src="https://www.jks.edu.sa/wp-content/uploads/2023/10/Lab_3-scaled.jpg" alt="Facility 2" />
            <h3>Science Laboratories</h3>
            <p>Our well-equipped science labs provide students with hands-on learning opportunities.</p>
          </div>
          <div className="facility">
            <img src="https://3.files.edl.io/f346/19/08/28/022227-e59fb2cd-70db-44fa-ab06-c9a734be2bfa.jpg" alt="Facility 3" />
            <h3>Library and Resource Center</h3>
            <p>Our extensive library offers a vast collection of books and digital resources for research and study.</p>
          </div>
        </div>
        <div className="facilities2">

        <div className="facility">
            <img src="https://www.alamedafree.org/files/sharedassets/library/v/1/computerlab.jpg?w=1200" alt="Facility 3" />
            <h3>Library and Resource Center</h3>
            <p>Our extensive library offers a vast collection of books and digital resources for research and study.</p>
          </div>

        

        <div className="facility">
            <img src="https://www.thebritishcollege.edu.np/uploads/medias/1602673266ECA.jpg" alt="Facility 3" />
            <h3>Library and Resource Center</h3>
            <p>Our extensive library offers a vast collection of books and digital resources for research and study.</p>
          </div>
          <div className="facility">
            <img src="https://www.globaltimes.cn/Portals/0/attachment/2022/2022-03-28/d9915366-1b5d-410d-a64d-7b8301e33812.jpeg" alt="Facility 3" />
            <h3>Library and Resource Center</h3>
            <p>Our extensive library offers a vast collection of books and digital resources for research and study.</p>
          </div>

    
        
      </div>
      </div>
    </section>
  );
}

export default About;


