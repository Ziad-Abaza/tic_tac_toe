# Tic Tac Toe Game

This repository contains a Tic Tac Toe game implemented with a **Rule-Based Intelligent Agent**. The project focuses on decision-making logic rather than machine learning, demonstrating how an agent can appear intelligent through well-defined rules and heuristics.

---

## Project Overview

The game allows a human player (X) to play against an automated opponent (O). The opponent does not learn from data or past games; instead, it relies on predefined logical rules to analyze the game state and choose actions. This makes the system a classic example of a **rule-based intelligent agent**, commonly used in simple games and educational demonstrations of decision-making systems.

---

## Conceptual Decision-Making Logic

The intelligent behavior of player **O** is based entirely on reasoning and strategy rather than code-level techniques or training. Conceptually, the agent operates as follows:

### 1. State Analysis

The agent continuously evaluates the current board configuration, identifying which cells are occupied, which are free, and how close either player is to forming a winning line.

### 2. Goal-Oriented Reasoning

The agent prioritizes outcomes using a clear hierarchy of objectives:

* **Win if possible**: If there is a move that immediately results in a win, the agent takes it.
* **Prevent loss**: If the opponent is one move away from winning, the agent blocks that move.
* **Strategic positioning**: When no immediate threat or win exists, the agent chooses positions that statistically improve its chances of winning (such as controlling the center or corners).
* **Fallback behavior**: If no strategic advantage is available, the agent selects a valid move to continue the game.

### 3. Opponent Strategy Evaluation

Rather than predicting future moves through simulation or learning, the agent recognizes known tactical patterns (such as forks or diagonal traps) and counters them using predefined defensive rules. This gives the impression of strategic awareness without adaptive intelligence.

### 4. Deterministic Yet Flexible Behavior

Most decisions follow deterministic logic, ensuring consistent and rational responses. In non-critical situations, limited randomness is introduced to avoid repetitive play patterns.

---

## Features

* **Human vs Intelligent Agent gameplay**
* **Strategic automated opponent (O)** based on rules and heuristics
* **Win, loss, and draw detection**
* **Clear visual feedback** for game outcomes
* **Simple and intuitive 3×3 grid interface**

---

## How to Play

1. Open the `index.html` file in your browser.
2. The game starts with player **X** (human).
3. Click on an empty square to make a move.
4. The intelligent agent (**O**) responds automatically.
5. The game ends when there is a win or a draw.

---

## Project Structure

* `index.html` — Defines the game layout and structure
* `styles.css` — Controls the visual design and layout
* `script.js` — Implements the rule-based decision logic and game flow

---

## Example Screenshot

![Tic Tac Toe](https://github.com/Ziad-Abaza/tic_tac_toe/blob/main/screenshots/screenshot.jpeg)

---

## How to Contribute

Contributions are welcome. You may fork the repository and enhance the logic, improve the UI, or experiment with alternative decision strategies.

---

## Contact

For questions or feedback:

* **Ziad Hassan Abaza**

  * GitHub: [https://github.com/Ziad-Abaza](https://github.com/Ziad-Abaza)
  * Email: [zeyad.h.abaza@gmail.com](mailto:zeyad.h.abaza@gmail.com)

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for det
