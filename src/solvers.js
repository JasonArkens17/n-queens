/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, rowIdx, colIdx) {
  rowIdx = rowIdx || 0; 
  colIdx = colIdx || 0; 
  var solution; 
  var board = new Board({'n': n});
  var size = n; 
  var columns = board.column();
  // var x = columns.rows();
  console.log(board);
  // var 
  // var size = board.length;
  // var rowIdx, colIdx;
  // //use the row 0, column 0 as the first piece to toggle;

  // for (var i = 0; i < size; i++) {
  //   this.toggle(i, i);
  // }
  // solution = this.rows();
  if (n < 2) {
    // return 1; 
    return [[1]];
  }

  // create input - make the board
  // 
    // use a for loop iterate through the first row
  for (rowIdx = 0; rowIdx < size; rowIdx++) {
    for (colIdx = 0; colIdx < size; colIdx++) {
        if (columns[colIdx].indexOf(1) === -1) {
          board.togglePiece(rowIdx, colIdx);
          columns = board.column();
          break;
        } 
      }
    } 
      // togglepieces at each space on board
      // move to next row 
      // for loop to iterate through columns
        //check if column conflict
        // no conflict toggle piece (rowIdx, colIdx)
  solution = board.rows(); 
  




  // create output - output a stringified version of board
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};




// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;









  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
