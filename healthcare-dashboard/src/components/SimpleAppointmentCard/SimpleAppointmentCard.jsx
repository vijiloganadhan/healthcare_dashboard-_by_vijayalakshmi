import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time }) => (
  <div className="simple-appointment-card">
    <h4 className="appointment-title">{title}</h4>
    <p className="appointment-time">{time}</p>
  </div>
);

export default SimpleAppointmentCard;
