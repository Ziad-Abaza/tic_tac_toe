# Tic Tac Toe Game

This project started as a **personal experiment and a bit of fun** while exploring how simple logic can create intelligent-looking behavior in games. It is a Tic Tac Toe game built around a **Rule-Based Intelligent Agent**, without using machine learning or training.

At the same time, this project acts as a stepping stone for my current learning path in **Reinforcement Learning (RL)**. The idea was to first understand and enjoy building decision-making logic manually, before later reusing or comparing it with an RL agent trained on the same environment.

---

## Project Overview

The game allows a human player (X) to play against an automated opponent (O). The opponent is not adaptive and does not learn from experience. Instead, it follows a clear set of predefined rules that analyze the board and choose reasonable actions.

This approach reflects how many classic games and early AI systems were built: by encoding **human reasoning into rules**, rather than relying on data-driven learning.

---

## Conceptual Decision-Making Logic (No Code)

The behavior of player **O** is entirely driven by logical reasoning. Conceptually, the agent thinks in the following way:

### 1. Understanding the Current State

Before making a move, the agent observes the board: which cells are empty, which are occupied, and whether any player is close to winning. The board itself represents the full state of the game.

### 2. Clear Priorities

The agent follows a simple but effective priority system:

* **Finish the game if possible**: If a winning move exists, it is taken immediately.
* **Avoid losing**: If the opponent is about to win, the agent blocks that move.
* **Improve future chances**: If there is no immediate threat, the agent chooses positions that are strategically stronger (such as the center or corners).
* **Keep the game going**: When no clear advantage exists, the agent plays a valid move to maintain progress.

### 3. Handling the Opponent

Rather than predicting many moves ahead, the agent reacts to known patterns. It recognizes simple tactical situations (like potential traps or alignments) and responds using predefined defensive logic. This creates the feeling of strategy without any form of learning or simulation.

### 4. Predictable but Not Boring

Most decisions are deterministic, ensuring consistent behavior. In non-critical situations, limited randomness is allowed so that the game does not always unfold in exactly the same way.

---

## Why Rule-Based and Not AI Learning?

This project is **not a machine-learning AI**. It is best described as a **Rule-Based Intelligent Agent**.

The main goals were:

* To enjoy building game logic by hand
* To better understand decision-making systems
* To create a solid baseline that can later be compared with a Reinforcement Learning agent

In future experiments, the same game environment can be reused to train an RL agent and compare how learned behavior differs from handcrafted logic.

---

## Features

* Human vs Rule-Based Agent gameplay
* Logical, strategy-driven opponent (O)
* Win, loss, and draw detection
* Visual feedback for game outcomes
* Simple and intuitive 3×3 grid interface

---

## How to Play

1. Open the `index.html` file in your browser.
2. The game starts with player **X** (human).
3. Click on an empty square to make a move.
4. Player **O** responds automatically using rule-based logic.
5. The game ends with a win or a draw.

---

## Project Structure

* `index.html` — Game layout and structure
* `styles.css` — Visual styling
* `script.js` — Game flow and rule-based decision logic

---

## Screenshot

![Tic Tac Toe](https://github.com/Ziad-Abaza/tic_tac_toe/blob/main/screenshots/screenshot.jpeg)

---

## Contact

**Ziad Hassan Abaza**

* GitHub: [https://github.com/Ziad-Abaza](https://github.com/Ziad-Abaza)
* Email: [zeyad.h.abaza@gmail.com](mailto:zeyad.h.abaza@gmail.com)

## Enjoy!

Thank you for playing! and have a great day :)