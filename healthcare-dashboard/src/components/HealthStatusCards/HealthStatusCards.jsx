import React from "react";
import "./HealthStatusCards.css";

const cardsData = [
  {
    title: "Lung",
    value: "date-01-05-2025",
    icon: "🫁",
    progress: 72,
    gradient: "linear-gradient(90deg, #667eea, #764ba2)" // Blue → Purple
  },
  {
    title: "Teeth",
    value: "date-10-05-2025",
    icon: "🦷",
    progress: 50,
    gradient: "linear-gradient(90deg, #6aa84f, #6aa84f)" // Green solid
  },
  {
    title: "Bone",
    value: "date-25-05-2025",
    icon: "🦴",
    progress: 90,
    gradient: "linear-gradient(90deg, #ff6a00, #ee0979)" // Orange → Pink
  }
];

const HealthStatusCards = () => (
  <div className="health-status-cards row g-3">
    {cardsData.map(({ title, value, icon, progress, gradient }, idx) => (
      <div key={idx} className="col-md-4 col-sm-6 col-12">
        <div className="card-status p-4 shadow-sm rounded-3">
          <div className="d-flex align-items-center mb-3">
            <div className="status-icon-wrapper me-3">
              <span className="status-icon">{icon}</span>
            </div>
            <div>
              <div className="status-title">{title}</div>
              <div className="status-value">{value}</div>
            </div>
          </div>
          <div className="progress-container mt-2">
            <div
              className="progress-bar-gradient"
              style={{
                width: `${progress}%`,
                background: gradient
              }}
            ></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
