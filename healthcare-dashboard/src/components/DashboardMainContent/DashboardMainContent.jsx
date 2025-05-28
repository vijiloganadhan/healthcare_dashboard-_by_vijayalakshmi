import React from "react";
import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import CalendarView from "../CalendarView/CalendarView";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-container container my-4">
      {/* Top row */}
      <div className="dashboard-top-row row gy-4">
        <div className="col-lg-6 col-md-12 anatomy-wrapper">
          <AnatomySection />
        </div>
        <div className="col-lg-6 col-md-12 calendar-wrapper">
          <CalendarView />
        </div>
      </div>

      {/* Bottom row */}
      <div className="dashboard-bottom-row row gy-4 mt-3">
        <div className="col-lg-8 col-md-12 left-bottom-section">
          <HealthStatusCards />
          <UpcomingSchedule />
        </div>
        <div className="col-lg-4 col-md-12 right-bottom-section">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
