"""
Connect 4 with AI using the Minimax algorithm optimized with alpha-beta pruning and advanced heuristics.

Group members:
- Antonin Gabet
- Tristan Garnier
- Alexandre Guénégan  

Board size: 12x6

Rules:
- The game is played on a board with 12 columns and 6 rows.
- Players take turns.
- One player uses "X" tokens (1), and the other uses "O" tokens (-1).
- The goal is to align 4 tokens horizontally, vertically, or diagonally.
- The game ends when a player aligns 4 tokens or when the board is full.

Heuristics:
- If 3 opponent's tokens are aligned: -50
- If 2 opponent's tokens are aligned: -5
- If 4 opponent's tokens are aligned: -100,000

- If 3 allied tokens are aligned: +50
- If 2 allied tokens are aligned: +5
- If 4 allied tokens are aligned: +100,000

For columns:
- Favor central columns
- Column weighting:
[1, 2, 4, 6, 8, 10, 10, 8, 6, 4, 2, 1]

Optimization:
- Use of a transposition table to avoid recalculations
- Reduction of search depth based on the number of possible moves
- Prioritization of central moves by sorting possible moves
- Algorithm stops if a winning move is found
"""

import time

penalite2 = 5
penalite3 = 50
penalite4 = 100000

class Puissance4:
    def __init__(self):
        self.board = [[0 for _ in range(12)] for _ in range(6)]
        self.current_player = 1
        self.score = 0
        self.winner = None
    
    def print_board(self):
        for row in self.board:
            for cell in row:
                if cell == 0:
                    print(" . ", end="")
                elif cell == 1:
                    print(" X ", end="")
                else:
                    print(" O ", end="")
            print()
        for i in range(36):
            print("-", end="")
        print()
        for i in range(12):
            if i < 10 :
                print(f" {i} ", end="")
            else:
                print(f"{i}  ", end="")
        print("\n")


def play_move(board, column, player):
    """Place a piece in the specified column for the current player."""
    for row in reversed(board):
        if row[column] == 0:
            row[column] = player
            return True
    return False


## Check horizontal, vertical, and diagonal lines for a win
def Terminal_Test(board):
    for row in range(len(board)):
        for col in range(len(board[0]) - 3):
            if board[row][col] == board[row][col + 1] == board[row][col + 2] == board[row][col + 3] != 0:
                return board[row][col]

    for col in range(len(board[0])):
        for row in range(len(board) - 3):
            if board[row][col] == board[row + 1][col] == board[row + 2][col] == board[row + 3][col] != 0:
                return board[row][col]

    for row in range(len(board) - 3):
        for col in range(len(board[0]) - 3):
            if board[row][col] == board[row + 1][col + 1] == board[row + 2][col + 2] == board[row + 3][col + 3] != 0:
                return board[row][col]

    for row in range(3, len(board)):
        for col in range(len(board[0]) - 3):
            if board[row][col] == board[row - 1][col + 1] == board[row - 2][col + 2] == board[row - 3][col + 3] != 0:
                return board[row][col]
    return 0


# Ajoute ce tableau après tes pénalités
col_weights = [1, 2, 4, 6, 8, 10, 10, 8, 6, 4, 2, 1]  # 12 colonnes, centre favorisé

## Calculate the fitness score based on the current board state    
def fitness(board, player):
    score = 0
    opponent = -player

    # Bonus pour les pions au centre
    for row in board:
        for col, cell in enumerate(row):
            if cell == player:
                score += col_weights[col]
            elif cell == opponent:
                score -= col_weights[col]

    # Check rows
    for row in board:
        for i in range(len(row) - 3):
            segment = row[i:i + 4]
            if segment.count(player) == 3 and segment.count(opponent) == 0:
                score += penalite3
            elif segment.count(player) == 2 and segment.count(opponent) == 0:
                score += penalite2
            elif segment.count(opponent) == 3 and segment.count(player) == 0:
                score -= penalite3
            elif segment.count(opponent) == 2 and segment.count(player) == 0:
                score -= penalite2
            
            elif segment.count(opponent) == 4 and segment.count(player) == 0:
                score -= penalite4
            elif segment.count(player) == 4 and segment.count(opponent) == 0:
                score += penalite4

    # Check columns
    for col in range(len(board[0])):
        for i in range(len(board) - 3):
            segment = [board[i + j][col] for j in range(4)]
            if segment.count(player) == 3 and segment.count(opponent) == 0:
                score += penalite3
            elif segment.count(player) == 2 and segment.count(opponent) == 0:
                score += penalite2
            elif segment.count(opponent) == 3 and segment.count(player) == 0:
                score -= penalite3
            elif segment.count(opponent) == 2 and segment.count(player) == 0:
                score -= penalite2

            elif segment.count(opponent) == 4 and segment.count(player) == 0:
                score -= penalite4
            elif segment.count(player) == 4 and segment.count(opponent) == 0:
                score += penalite4

    # Check diagonals (bottom-left to top-right)
    for row in range(len(board) - 3):
        for col in range(3, len(board[0])):
            segment = [board[row + i][col - i] for i in range(4)]
            if segment.count(player) == 3 and segment.count(opponent) == 0:
                score += penalite3
            elif segment.count(player) == 2 and segment.count(opponent) == 0:
                score += penalite2
            elif segment.count(opponent) == 3 and segment.count(player) == 0:
                score -= penalite3
            elif segment.count(opponent) == 2 and segment.count(player) == 0:
                score -= penalite2
            
            elif segment.count(opponent) == 4 and segment.count(player) == 0:
                score -= penalite4
            elif segment.count(player) == 4 and segment.count(opponent) == 0:
                score += penalite4

    # Check diagonals (top-left to bottom-right)
    for row in range(3, len(board)):
        for col in range(len(board[0]) - 3):
            segment = [board[row - i][col + i] for i in range(4)]
            if segment.count(player) == 3 and segment.count(opponent) == 0:
                score += penalite3
            elif segment.count(player) == 2 and segment.count(opponent) == 0:
                score += penalite2
            elif segment.count(opponent) == 3 and segment.count(player) == 0:
                score -= penalite3
            elif segment.count(opponent) == 2 and segment.count(player) == 0:
                score -= penalite2

            elif segment.count(opponent) == 4 and segment.count(player) == 0:
                score -= penalite4
            elif segment.count(player) == 4 and segment.count(opponent) == 0:
                score += penalite4
    return score

def possible_moves(board):
    """Return a list of columns where a move can be played."""
    moves = []
    for col in range(len(board[0])):
        if board[0][col] == 0:  # Check if the column is not full
            moves.append(col)
    return moves

def sorted_moves(board, player=1):
    """Return a sorted list of columns based on move priority."""
    cols = possible_moves(board)
    center = len(board[0]) // 2

    def move_priority(col):
        temp_board = [row[:] for row in board]
        play_move(temp_board, col, player)
        if Terminal_Test(temp_board) == player:
            return -100  # Coup gagnant
        # Teste si l'adversaire gagne au prochain coup si on ne bloque pas
        temp_board2 = [row[:] for row in board]
        play_move(temp_board2, col, -player)
        if Terminal_Test(temp_board2) == -player:
            return -50  # Coup bloquant
        return abs(center - col)  # Sinon, priorité au centre

    return sorted(cols, key=move_priority)

def minimax(board, depth, maximizing_player, alpha=float('-inf'), beta=float('inf'), transpo_table=None):
    """Minimax algorithm with alpha-beta pruning and transposition table."""
    if transpo_table is None:
        transpo_table = {}

    # Crée une clé unique pour le plateau
    board_key = tuple(tuple(row) for row in board)
    if (board_key, depth, maximizing_player) in transpo_table:
        return transpo_table[(board_key, depth, maximizing_player)]

    terminal_result = Terminal_Test(board)
    if terminal_result != 0 or depth == 0:
        score = fitness(board, 1) if maximizing_player else fitness(board, -1)
        transpo_table[(board_key, depth, maximizing_player)] = score
        return score

    if maximizing_player:
        max_eval = float('-inf')
        for col in sorted_moves(board, 1):  # maximizing
            new_board = [row[:] for row in board]
            play_move(new_board, col, 1)
            # Vérifie victoire immédiate
            if Terminal_Test(new_board) == 1:
                transpo_table[(board_key, depth, maximizing_player)] = penalite4
                return penalite4
            if depth <= 2 and fitness(new_board, 1) + penalite3 < alpha:
                continue  # Futility pruning
            eval = minimax(new_board, depth - 1, False, alpha, beta, transpo_table)
            max_eval = max(max_eval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break
        transpo_table[(board_key, depth, maximizing_player)] = max_eval
        return max_eval
    else:
        min_eval = float('inf')
        for col in sorted_moves(board, -1):  # minimizing
            new_board = [row[:] for row in board]
            play_move(new_board, col, -1)
            # Vérifie victoire immédiate adverse
            if Terminal_Test(new_board) == -1:
                transpo_table[(board_key, depth, maximizing_player)] = -penalite4
                return -penalite4
            if depth <= 2 and fitness(new_board, -1) - penalite3 > beta:
                continue  # Futility pruning
            eval = minimax(new_board, depth - 1, True, alpha, beta, transpo_table)
            min_eval = min(min_eval, eval)
            beta = min(beta, eval)
            if beta <= alpha:
                break
        transpo_table[(board_key, depth, maximizing_player)] = min_eval
        return min_eval


def dynamic_depth(board, base_depth=8):
    """Reduce the depth if a lot of moves are available."""
    moves = len(possible_moves(board))
    if moves > 8:
        return max(4, base_depth - 2)
    return base_depth

def IA_Decision(board, depth=8):
    """Play the best move for the current player using minimax."""
    best_move = None
    best_value = float('-inf')
    transpo_table = {}
    depth = dynamic_depth(board, depth)
    for col in possible_moves(board):
        new_board = [row[:] for row in board]
        play_move(new_board, col, 1)
        if Terminal_Test(new_board) == 1:
            return col          
        move_value = minimax(new_board, depth - 1, False, float('-inf'), float('inf'), transpo_table)
        if move_value > best_value:
            best_value = move_value
            best_move = col
    if best_move is not None:
        return best_move
    return None


## Game loop for human vs AI
def jeu():
    game = Puissance4()
    game.print_board()

    # Choix du joueur qui commence
    while True:
        first = input("Qui commence ? (h pour humain, i pour IA) : ").strip().lower()
        if first in ("h", "i"):
            break
        print("Entrée invalide. Tapez 'h' pour humain ou 'i' pour IA.")

    human_turn = (first == "h")

    while True:
        if human_turn:
            # Human player's turn
            while True:
                try:
                    col = int(input("Joueur humain, choisissez une colonne (0-11) : "))
                    if 0 <= col < 12 and play_move(game.board, col, -1):
                        break
                    else:
                        print("Colonne invalide ou pleine. Essayez à nouveau.")
                except ValueError:
                    print("Entrée invalide. Veuillez entrer un nombre entre 0 et 11.")

            game.print_board()
            game.score = fitness(game.board, -1)
            if Terminal_Test(game.board) == -1:
                print("Le joueur humain a gagné !")
                break
        else:
            # AI player's turn
            print("C'est le tour de l'IA.")
            startTime = time.time()
            ia_col = IA_Decision(game.board)
            endTime = time.time()
            play_move(game.board, ia_col, 1)
            print(f"L'IA a joué en colonne {ia_col} en {endTime - startTime:.2f} secondes.")
            game.print_board()
            game.score = fitness(game.board, -1)

            if Terminal_Test(game.board) == 1:
                print("L'IA a gagné !")
                break

        human_turn = not human_turn

        # Vérifie le match nul
        if Terminal_Test(game.board) == 0 and len(possible_moves(game.board)) == 0:
            print("Match nul !")
            break


jeu()