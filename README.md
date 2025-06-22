# ♟️ BlunderBuddy

A free, self-hostable chess tactics trainer that lets you practice puzzles, track progress, and understand *why* a move is wrong — powered by Stockfish. Inspired by the limitations of existing puzzle platforms, this app helps you *learn from your mistakes*.

## 🧠 Key Features

- Solve chess puzzles interactively (drag-and-drop)
- Get instant feedback (correct or not)
- Analyze *why* a wrong move is bad with the help of Stockfish
- Toggle “Next Best Moves” after mistakes to see the resulting position
- Run fully locally - no internet or server costs
- Store user attempts in a lightweight SQLite database

---

## 🛠️ Tech Stack

**Frontend**: React, Tailwind CSS  
**Backend**: Flask (REST API), Stockfish integration  
**Database**: SQLite  
**Chess Engine**: [Stockfish](https://stockfishchess.org/download/) (installed locally by user)

---

## 🚀 Getting Started

### 📦 Prerequisites

- Python 3.8+
- Node.js + npm
- Git
- Download Stockfish binary:
  - [Stockfish Downloads](https://stockfishchess.org/download/)
  - Place it in `backend/stockfish/` or update the path in `engine.py`

---

### ⚙️ Backend Setup

```bash
git clone https://github.com/yourusername/chess-tactics-trainer.git
cd chess-tactics-trainer/backend

python3 -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt

# Start the Flask server
python app.py
