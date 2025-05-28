import React from "react";
import "./UpcomingSchedule.css";

const upcomingAppointments = [
  { time: "9:00 AM", patient: "John Doe", reason: "Consultation" },
  { time: "11:30 AM", patient: "Mary Jane", reason: "Follow-up" },
  { time: "2:00 PM", patient: "Peter Parker", reason: "X-Ray Results" },
];

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h2>Upcoming Appointments</h2>
    <ul className="appointment-list list-unstyled">
      {upcomingAppointments.map((appt, idx) => (
        <li key={idx} className="appointment-item d-flex justify-content-between align-items-center">
          <div className="appointment-time fw-bold">{appt.time}</div>
          <div className="appointment-details">
            <div className="patient-name">{appt.patient}</div>
            <div className="appointment-reason text-muted">{appt.reason}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UpcomingSchedule;
