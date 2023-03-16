const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkForWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
      alert(`Player ${currentPlayer} wins!`);
    }
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    if (e.target.textContent === '') {
      e.target.textContent = currentPlayer;
      checkForWin();
      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X';
      }
    }
    
  });
}
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].classList.remove('X','O');
  }
  currentPlayer = 'X';
});

