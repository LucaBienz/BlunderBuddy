from flask import Flask, request, jsonify
from flask_cors import CORS
import engine

app = Flask(__name__)
CORS(app)

@app.route('/api/evaluate', methods=['POST'])
def evaluate_position():
    data = request.get_json()
    fen = data.get('fen')
    if not fen:
        return jsonify({'error': 'No FEN provided'}), 400

    try:
        engine.set_position(fen)
        best_move = engine.get_best_move()
        evaluation = engine.get_evaluation()
        best_line = engine.get_best_line(5)

        return jsonify({
            'best_move': best_move,
            'evaluation': evaluation,
            'best_line': best_line
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
