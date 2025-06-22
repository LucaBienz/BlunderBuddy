import os
from stockfish import Stockfish

# Adjust this if needed depending on your OS and where you put Stockfish
STOCKFISH_PATH = os.path.join(os.path.dirname(__file__), 'stockfish', 'stockfish.exe')

stockfish = Stockfish(STOCKFISH_PATH)
stockfish.set_depth(12)

def set_position(fen):
    stockfish.set_fen_position(fen)

def get_best_move():
    return stockfish.get_best_move()

def get_evaluation():
    return stockfish.get_evaluation()

def get_best_line(num_moves=5):
    return stockfish.get_top_moves(num_moves)
