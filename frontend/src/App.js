import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PuzzlePage from "./pages/PuzzlePage";
import SettingsCog from "./components/SettingsCog";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <SettingsCog darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/puzzle" element={<PuzzlePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
    </div>
  );
}
