import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarView.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Dental Appointment',
    start: new Date(2025, 4, 28, 10, 0),
    end: new Date(2025, 4, 28, 11, 0),
  },
  {
    title: 'Eye Checkup',
    start: new Date(2025, 4, 30, 14, 0),
    end: new Date(2025, 4, 30, 15, 0),
  },
];

const CalendarView = () => (
  <div className="calendar-view">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default CalendarView;
