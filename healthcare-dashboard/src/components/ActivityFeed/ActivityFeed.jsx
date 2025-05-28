import React from "react";
import "./ActivityFeed.css";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const activityData = [
  [30, 60],
  [20, 50],
  [50, 80],
  [40, 70],
  [30, 90],
  [60, 70],
  [40, 60],
];

const ActivityFeed = () => (
  <div className="activity-feed bg-white p-3 rounded shadow-sm h-100 d-flex flex-column">
    <h2>Activity</h2>
    <p>3 appointments this week</p>
    <div className="activity-chart d-flex justify-content-between align-items-end flex-grow-1">
      {activityData.map((bars, index) => (
        <div key={index} className="day-column text-center flex-fill mx-1">
          <div
            className="bars d-flex flex-column justify-content-end mb-2"
            style={{ height: "120px" }}
          >
            {bars.map((height, idx) => (
              <div
                key={idx}
                className={`bar bar-${idx} mb-1 rounded`}
                style={{
                  height: `${height}%`,
                  backgroundColor: idx === 0 ? "#2b6cb0" : "#4299e1",
                }}
              ></div>
            ))}
          </div>
          <span className="day-label">{days[index]}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
