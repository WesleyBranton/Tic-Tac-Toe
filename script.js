/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

var turn;
var turnCount = 0;
var positions = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']
];

// Insert player marking
function playerMove(square, x, y) {
    var target = square.target;
    target.innerHTML = turn;
    positions[y][x] = turn;
    if (turn == 'X') {
        target.style.color = '#EA4335';
    } else {
        target.style.color = '#4285F4';
    }
    target.disabled = true;
    turnCount++;
    checkWin(x, y);
}

// Check for a win
function checkWin(x,y) {
    if ((positions[y][0] == positions[y][1] && positions[y][1] == positions[y][2]) || 
        (positions[0][x] == positions[1][x] && positions[1][x] == positions[2][x]) ||
        (positions[0][0] == positions[1][1] && positions[1][1] == positions[2][2]) ||
        (positions[2][0] == positions[1][1] && positions[1][1] == positions[0][2])) {
        document.getElementById('gameEnd').style.display = 'block';
        document.getElementById('restartButton').style.display = 'block';
        var display = document.getElementById('turnDisplay');
        display.innerHTML = turn + ' has won the game!';
        display.style.color = 'black';
    } else {
        if (turnCount >= 9) {
            var display = document.getElementById('turnDisplay');
            display.innerHTML = "It's a cat's game...";
            display.style.color = 'black';
            document.getElementById('restartButton').style.display = 'block';
        } else {
            displayTurn();
        }
    }
}

// Update turn display
function displayTurn() {
    var display = document.getElementById('turnDisplay');
    if (turn == 'X') { 
        display.style.color = '#4285F4';
        turn = 'O';
    } else {
        display.style.color = '#EA4335';
        turn = 'X';
    }
    display.innerHTML = 'It is ' + turn + "s turn!";
}

// Initialize game
function startGame() {
    var initial = Math.random();
    var display = document.getElementById('turnDisplay');
    if (initial <= 0.5) {
        turn = 'O';
        display.style.color = '#4285F4';
    } else {
        turn = 'X';
        display.style.color = '#EA4335';
    }
    display.innerHTML = turn + ' will start the game!';
}
