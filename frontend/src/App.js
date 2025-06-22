import React, { useState, useEffect } from "react";
import ChessPuzzleBoard from "./components/ChessPuzzleBoard";
import { FaCog } from "react-icons/fa"; // Gear icon

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Toggle Tailwind dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#121212] text-black dark:text-[#f0f0f0] transition-colors duration-300 relative">
      {/* Settings Icon */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-2xl text-black dark:text-[#f0f0f0] focus:outline-none"
        >
          <FaCog />
        </button>

        {/* Dropdown */}
        <div
          className={`${
            dropdownOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          } absolute top-10 right-0 transition-all duration-300 ease-in-out`}
        >
          <div className="bg-white dark:bg-[#121212] border border-black dark:border-[#f0f0f0] rounded-md shadow-[0_6px_12px_rgba(0,0,0,0.15)] min-w-[180px] transition-colors duration-300">
            <button
              onClick={toggleDarkMode}
              className="block w-full text-left py-2 px-4 text-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-[#8855ff] dark:text-[#bb86fc] mb-1">
          BlunderBuddy
        </h1>
        <p className="text-sm mb-6">
          Practice tactics and learn from your mistakes.
        </p>
        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] inline-block transition-colors duration-300">
          <ChessPuzzleBoard darkMode={isDarkMode} setMessage={setMessage} />
          {message && (
            <p className="mt-4 text-gray-800 dark:text-gray-200 text-sm">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
