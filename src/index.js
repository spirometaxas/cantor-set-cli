const getWidth = function(n) {
  return Math.pow(3, n);
}

const getHeight = function(n) {
  return n + 1;
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawLine = function(board, pos, scale) {
  for (let i = 0; i < getWidth(scale); i++) {
    board[pos.y][pos.x - parseInt(getWidth(scale) / 2.0) + i] = '─';
  }
}

const cantor = function(n, scale, board, pos) {
  drawLine(board, pos, scale);

  if (n > 0) {
    cantor(n - 1, scale - 1, board, { x: pos.x - getWidth(scale - 1), y: n - 1 });
    cantor(n - 1, scale - 1, board, { x: pos.x + getWidth(scale - 1), y: n - 1 });
  }
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, scale) {
  if (n === undefined || n < 0) {
    return '';
  }
  if (scale === undefined || scale < n) {
    scale = n;
  }

  const board = createBoard(getWidth(scale), getHeight(scale));
  cantor(n, scale, board, { x: parseInt(getWidth(scale) / 2.0), y: n });
  return draw(board);
}

module.exports = {
  create: create
};