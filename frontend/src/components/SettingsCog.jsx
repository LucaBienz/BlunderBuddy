import React, { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function SettingsCog({ darkMode, setDarkMode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  return (
    <div className="absolute top-4 right-4 z-50">
        <div className="relative inline-block text-left">
        <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition"
        >
            <FaCog size={24} />
        </button>

        {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg z-10">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-sm text-gray-800 dark:text-gray-200 hover:underline"
            >
                Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>
            </div>
        )}
        </div>
    </div>
    );
}
