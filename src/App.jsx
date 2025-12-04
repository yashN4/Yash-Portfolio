import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import ProfileSection from "./Components/Sidebar/ProfileSection";
import MainContent from "./Components/MainContent/MainContent";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("home");
  return (
    <div className="app-layout">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <MainContent activeNav={activeNav} />
    </div>
  );
}

export default App;
