import React from "react";
import Sidebar from "../components/Sidebar";
import ChessPuzzleBoard from "../components/ChessPuzzleBoard";
import SettingsCog from "../components/SettingsCog";

export default function PuzzlePage({ darkMode, setDarkMode }) {
    return (
        <div className={darkMode ? "dark" : ""}>
        <SettingsCog darkMode={darkMode} setDarkMode={setDarkMode} />
        <Sidebar />
        <main className="flex-1 min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6">
            <ChessPuzzleBoard />
        </main>
        </div>
    );
}
