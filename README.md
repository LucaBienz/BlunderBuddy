# ♟️ BlunderBuddy

A free, self-hostable chess tactics trainer that lets you practice puzzles, track progress, and understand *why* a move is wrong - powered by Stockfish. Inspired by the limitations of existing puzzle platforms, this app helps you *learn from your mistakes*.

## 🧠 Key Features

- Solve chess puzzles interactively (drag-and-drop)
- Get instant feedback (correct or not)
- Analyze *why* a wrong move is bad with the help of Stockfish
- Toggle “Next Best Moves” after mistakes to see the resulting position
- Run fully locally - no internet or server costs
- Store user attempts in a lightweight SQLite database

## 🛠️ Tech Stack

**Frontend**: React, Tailwind CSS  
**Backend**: Flask (REST API), Stockfish integration  
**Database**: SQLite  
**Chess Engine**: [Stockfish](https://stockfishchess.org/download/) (installed locally by user)

## 🚀 Getting Started

### 📦 Prerequisites

- Python 3.8+
- Node.js + npm
- Git
- Download Stockfish binary:
  - [Stockfish Downloads](https://stockfishchess.org/download/)
  - Place it in `backend/stockfish/` or update the path in `engine.py`

### ⚙️ Backend Setup

```bash
git clone https://github.com/yourusername/BlunderBuddy.git
cd BlunderBuddy/backend

python3 -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt

# Start the Flask server
python app.py
```

> 🧠 Make sure the `stockfish` binary is present at `./stockfish/stockfish`  
> You can change the path in `engine.py` if needed.

### 🖥️ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

This starts the React frontend at [http://localhost:3000](http://localhost:3000).

## ♟️ Puzzle Format

Puzzles are stored in SQLite and include:

- FEN (position)
- Solution moves (in UCI format)
- Themes/tags (optional)
- Rating (optional)

You can preload puzzles into the database or build an upload tool later.

## 🧪 Testing

- Backend: Pytest
- Frontend: Cypress (optional)

## 🤖 Stockfish Integration

This project uses the [`stockfish`](https://pypi.org/project/stockfish/) Python package to:
- Evaluate the best move from a given position
- Show a sequence of responses after incorrect user input

> All engine analysis is done locally - no cloud API needed.

## 💡 Roadmap

- [ ] User auth and stats
- [ ] Puzzle tagging and filtering
- [ ] Elo-style puzzle rating
- [ ] Daily challenge mode
- [ ] Multiplayer / head-to-head tactics race

## 🧠 Why I Built This

Chess puzzles are a great way to train tactics - but most platforms don’t explain *why* a move fails. This trainer lets you not only fail, but *understand your failure*, with full engine context.

## 👐 Contributing

Pull requests are welcome!  
You can:
- Add new puzzles
- Improve UI/UX
- Suggest new modes or settings
- Help with refactors or documentation

Start with an issue or drop a comment in the Discussions tab.

## 📄 License

MIT

## 👋 Author

Built by [Luca Bienz](https://github.com/LucaBienz)
