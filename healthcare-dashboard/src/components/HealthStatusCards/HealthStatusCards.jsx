import React from "react";
import "./HealthStatusCards.css";

const cardsData = [
  { title: "Heart Rate", value: "72 bpm", icon: "❤️" },
  { title: "Blood Pressure", value: "120/80 mmHg", icon: "🩸" },
  { title: "Oxygen Level", value: "98%", icon: "🫁" },
];

const HealthStatusCards = () => (
  <div className="health-status-cards row g-3">
    {cardsData.map(({ title, value, icon }, idx) => (
      <div key={idx} className="col-md-4 col-12">
        <div className="card-status p-3 d-flex align-items-center gap-3 shadow-sm">
          <div className="status-icon fs-3">{icon}</div>
          <div>
            <div className="status-title fw-semibold">{title}</div>
            <div className="status-value fs-5">{value}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
