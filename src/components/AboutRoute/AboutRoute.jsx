// import React from 'react';
// import './AboutRoute.css';

// const About = () => {
//   return (
//     <div className="about-section">
//       <div className="about-header">
//         <h1>About Us</h1>
//         <p>
//           Pragati Secondary School, founded and run under Pragati Education Foundation, is a co-educational private school located in Batulechour -16 Pokhara. Motivated by the zeal of the local academic enthusiasts who accentuated the need to establish an English Medium school in the very locality, Pragati was founded in 2047 B.S. (1999 A.D) by Mr. Basanta Baniya, a local resident. Back then, the main objective behind its establishment was to stop a much strenuous exodus of the local students flocking into the main city center for better education.
//         </p>
//         <p>
//           Since its establishment, Pragati has endeavored in all its capacity to be as holistic and dynamic as it can be so that it can unearth and nurture every potential a student has. After two and half a decade, the school is now able to establish itself as a trusted academic institution that attracts students from other parts of the valley as well.
//         </p>
//       </div>
//       <div className="about-image">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Harvard_University_Widener_Library.jpg" alt="Pragati Secondary School" />
//       </div>
//       <div className="mission-vision-container">
//         <div className="mission">
//           <h2>Our Mission</h2>
//           <p>To provide holistic education that fosters intellectual, social, and personal growth for all students.</p>
//         </div>
//         <div className="vision">
//           <h2>Our Vision</h2>
//           <p>To be a leading educational institution recognized for academic excellence and innovation.</p>
//         </div>
//       </div>
//       <div className="history-container">
//         <h2>Our History</h2>
//         <p>
//           Pragati Secondary School was founded in 2047 B.S. (1999 A.D) with the vision of providing quality education in the local community of Batulechour, Pokhara. Over the years, the school has grown and adapted to meet the educational needs of a diverse student population, continually striving to offer a comprehensive and engaging learning experience.
//         </p>
//         <div className="principal-message">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" alt="Principal" />
//           <p><strong>Message from the Principal:</strong> "We are committed to nurturing the minds and spirits of our students, preparing them to be thoughtful, responsible, and active members of society."</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from 'react';
import './AboutRoute.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Pragati Secondary School, founded and run under Pragati Education Foundation, is a co-educational private school located in Batulechour -16 Pokhara. Motivated by the zeal of the local academic enthusiasts who accentuated the need to establish an English Medium school in the very locality, Pragati was founded in 2047 B.S. (1999 A.D) by Mr. Basanta Baniya, a local resident. Back then, the main objective behind its establishment was to stop a much strenuous exodus of the local students flocking into the main city center for better education.
        </p>
        <p>
          Since its establishment, Pragati has endeavored in all its capacity to be as holistic and dynamic as it can be so that it can unearth and nurture every potential a student has. After two and half a decade, the school is now able to establish itself as a trusted academic institution that attracts students from other parts of the valley as well.
        </p>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Harvard_University_Widener_Library.jpg" alt="Pragati Secondary School" />
        </div>
        <div className="about-details">
          <div className="mission-vision">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>To provide holistic education that fosters intellectual, social, and personal growth for all students.</p>
            </div>
            <div className="vision">
              <h2>Our Vision</h2>
              <p>To be a leading educational institution recognized for academic excellence and innovation.</p>
            </div>
          </div>
          <div className="history-container">
            <h2>Our History</h2>
            <p>
              Pragati Secondary School was founded in 2047 B.S. (1999 A.D) with the vision of providing quality education in the local community of Batulechour, Pokhara. Over the years, the school has grown and adapted to meet the educational needs of a diverse student population, continually striving to offer a comprehensive and engaging learning experience.
            </p>
            <div className="principal-message">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" alt="Principal" />
              <p><strong>Message from the Principal:</strong> "We are committed to nurturing the minds and spirits of our students, preparing them to be thoughtful, responsible, and active members of society."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

