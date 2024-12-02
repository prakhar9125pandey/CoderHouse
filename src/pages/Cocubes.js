import React from "react";
import "./Cocubes.css";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const Cocubes = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="amcat-container">
      {/* Back Button */}
      <button 
        className="back-button1" 
        onClick={() => navigate("/marathon-classes")}
      >
         Back to Marathon
      </button>

      <h1 className="amcat-title">Marathon Classes</h1>
      <div className="amcat-tabs">
        <button className="tab">AMCAT</button>
        <button className="tab active">CoCubes</button>
        <button className="tab">eLitmus</button>
      </div>

      <h2 className="amcat-subtitle">CoCubes Previous Papers and Pattern for Cocubes Questions</h2>
      <table className="amcat-table">
        <thead>
          <tr>
            <th>CoCubes Exam 2024</th>
            <th>No. of Questions and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quants + English + Logical</td>
            <td>
              <ul>
                <li>30 Ques and 45 mins</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Computer Fundamentals</td>
            <td>
              <ul>
                <li>15 Ques and 15 mins</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Domain Related Questions</td>
            <td>
              <ul>
                <li>50 Ques and 12 mins</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Psychometric Test</td>
            <td>
              <ul>
                <li>50 Ques and 12 mins</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Coding Round</td>
            <td>
              <ul>
                <li>3 Ques and 45 mins</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Written English Test</td>
            <td>
              <ul>
                <li>3 1 Ques and 25 mins</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div className="amcat-important-details">
        <h3>Important Details:</h3>
        <ul>
          <li>✔️ There will be no negative marking.</li>
          <li>✔️ AMCAT Exam is Adaptive.</li>
          <li>✔️ A test report will be generated based on your performance in the exam.</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Cocubes;