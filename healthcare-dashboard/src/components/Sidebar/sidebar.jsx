import React, { useState } from 'react';
import {
  Home,
  Clock,
  Calendar,
  PieChart,
  FileText,
  MessageSquare,
  LifeBuoy,
  Settings
} from 'lucide-react';
import './sidebar.css';

const navItems = [
  { icon: <Home />, label: 'Dashboard' },
  { icon: <Clock />, label: 'History' },
  { icon: <Calendar />, label: 'Calendar' },
  { icon: <Clock />, label: 'Appointments' },
  { icon: <PieChart />, label: 'Statistics' },
  { icon: <FileText />, label: 'Tests' },
  { icon: <MessageSquare />, label: 'Chat' },
  { icon: <LifeBuoy />, label: 'Support' },
  { icon: <Settings />, label: 'Setting' }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle button visible only on small screens */}
      <button
        className="sidebar-toggle-btn d-md-none"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        &#x2261;
      </button>

      <div className={`sidebar-wrapper ${isOpen ? 'active' : ''}`}>
        <aside className="sidebar">
          <nav className="nav-links">
            {navItems.map((item, idx) => (
              <div className="nav-item" key={idx}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="sidebar-overlay d-md-none"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
