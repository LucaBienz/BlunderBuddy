// src/components/Sidebar.jsx
import React from "react";
import {
    Puzzle,
    Brain,
    Undo2,
} from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-full w-40 bg-gray-100 dark:bg-gray-800 flex flex-col items-center py-6 space-y-20 shadow-lg z-30">
            <h1 className="text-xl font-bold text-purple-600 dark:text-purple-300 whitespace-nowrap overflow-visible">BlunderBuddy</h1>
            <button title="Puzzles" className="text-gray-600 dark:text-gray-300 hover:text-purple-500">
                <Puzzle size={34}/>
            </button>
            <button title="Coach Mode" className="text-gray-600 dark:text-gray-300 hover:text-purple-500">
                <Brain size={34}/>
            </button>
            <button title="Mistakes" className="text-gray-600 dark:text-gray-300 hover:text-purple-500">
                <Undo2 size={34}/>
            </button>
        </aside>
    );
}
