import React from 'react';
import './Header.css';
import { Search, Bell, Plus } from 'lucide-react';

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-left">
          <h1 className="logo">❤️ MyDoctor</h1>
          <div className="search-wrapper">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="header-right">
          <Bell size={20} className="icon" />
          <div className="profile">
            <img src="https://i.pravatar.cc/40" alt="User avatar" />
            <span>Vijayalakshmi</span>
          </div>
          <button className="add-button">
            <Plus size={16} />
          </button>
        </div>
      </header>
    </div>
  );
}
