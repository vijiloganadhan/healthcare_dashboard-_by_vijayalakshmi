import React from "react";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
