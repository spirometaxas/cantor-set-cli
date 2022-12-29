const getWidth = function(n) {
  return Math.pow(3, n);
}

const getHeight = function(n, isBlockOrFull) {
  if (isBlockOrFull) {
    return ((n + 1) * 2) - 1;
  } else {
    return n + 1;
  }
}

const LINES = {
  '─': {
    STANDARD: '─',
    BOLD: '━',
    DOUBLE: '═',
    FULL: '\u001b[7m \u001b[0m',
    BLOCK: '█'
  }
};

const getLineType = function(line) {
  if (line !== undefined && (line.toLowerCase() === 'standard' || line.toLowerCase() === 'double' || line.toLowerCase() === 'bold' || isBlockOrFull(line))) {
    return line.toLowerCase();
  }
  return 'standard';
}

const isBlockOrFull = function(line) {
  return line !== undefined && (line.toLowerCase() === 'full' || line.toLowerCase() === 'block');
}

const getLine = function(lineId, lineType) {
  if (LINES[lineId] !== undefined && lineType !== undefined) {
    return LINES[lineId][lineType.toUpperCase()];
  } else if (LINES[lineId] !== undefined) {
    return LINES[lineId].STANDARD;
  } else {
    return ' ';
  }
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

const drawLine = function(board, pos, size) {
  for (let i = 0; i < getWidth(size); i++) {
    board[pos.y][pos.x - parseInt(getWidth(size) / 2.0) + i] = '─';
  }
}

const cantor = function(n, size, board, pos, line) {
  drawLine(board, pos, size);

  if (n > 0) {
    cantor(n - 1, size - 1, board, { x: pos.x - getWidth(size - 1), y: isBlockOrFull(line) ? pos.y - 2 : pos.y - 1 }, line);
    cantor(n - 1, size - 1, board, { x: pos.x + getWidth(size - 1), y: isBlockOrFull(line) ? pos.y - 2 : pos.y - 1 }, line);
  }
}

const draw = function(board, lineType) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += getLine(board[board.length - i - 1][j], lineType);
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }
  
  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const lineType = config !== undefined ? getLineType(config.line) : undefined;

  const board = createBoard(getWidth(size), getHeight(size, isBlockOrFull(lineType)));
  cantor(n, size, board, { x: parseInt(getWidth(size) / 2.0), y: getHeight(size, isBlockOrFull(lineType)) - 1 }, lineType);
  return draw(board, lineType);
}

module.exports = {
  create: create
};