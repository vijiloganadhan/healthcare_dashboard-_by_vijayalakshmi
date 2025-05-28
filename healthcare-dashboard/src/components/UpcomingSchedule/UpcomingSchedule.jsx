import React from "react";
import "./UpcomingSchedule.css";

const upcomingAppointments = [
  { time: "9:00 AM", patient: "John Doe", reason: "Consultation", date: "30-05-2025" },
  { time: "11:30 AM", patient: "Mary Jane", reason: "Follow-up", date: "10-06-2025" },
  { time: "2:00 PM", patient: "Peter Parker", reason: "X-Ray Results", date: "20-06-2025" },
];

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h2 className="schedule-heading">Upcoming Appointments</h2>
    <ul className="appointment-list">
      {upcomingAppointments.map((appt, idx) => (
        <li key={idx} className="appointment-card">
          <div className="appointment-time">
            <span role="img" aria-label="clock" className="clock-emoji">
              🕒
            </span>
            {appt.time}
          </div>
          <div className="appointment-info">
            <div className="patient-name">{appt.patient}</div>
            <div className="appointment-reason">{appt.reason}</div>
            <div className="appointment-date">{appt.date}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UpcomingSchedule;
