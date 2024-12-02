import React from 'react';
import "./Contest.css";
import { useNavigate } from 'react-router-dom'; 

const Contest = () => {
  const navigate = useNavigate();
  const imageUrl = "YOUR_IMAGE_URL_HERE"; // Replace with your actual image URL

  return (
    <div className="container2">
      {/* Video Background */}
      {/* <video autoPlay muted loop className="video-background">
        <source src="/video/code.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/Features')}>
        &#8592; Back
      </button>

      {/* Heading */}
      <h1 className="heading5">Contest Journey</h1>

      <div className="content-container">
        {/* Stripes Section */}
        <div className="stripes-section">
          <div className="box3 shadow">
            {/* <span className="circle"></span> */}
            <div className="text-content">
              <h3>In-house Coding Challenges</h3>
              <p>Structured programs for skill enhancement.</p>
            </div>
          </div>
          <div className="box3 shadow">
            {/* <span className="circle"></span> */}
            <div className="text-content">
              <h3>National & International Competitions</h3>
              <p>Visual guides and flowcharts for contest prep.</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src="/images/code1.png" alt="Contest Illustration" className="long-image" />
        </div>
      </div>
    </div>
  );
};

export default Contest;
