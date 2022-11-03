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



window.findNRooksSolution = function(n) {
  const solution = new Board({ n });
  let r = 0;

  while (r < n) {
    solution.togglePiece(r, r);
    r++;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// [0, 0, 0, 0]
// [0, 0, 0, 0]
// [0, 0, 0, 0]
// [0, 0, 0, 0]

// [1, 0, 0, 0]
// [0, 1, 0, 0]
// [0, 0, 1, 0]
// [0, 0, 0, 1]

// Helper function:
//   Set first row equal to this;
//   call for each on remaining rows [0, 0, 0, 0]
//     togglePiece at i, i
//     if (board.hasColConflicts(i) || board.hasRowConflictAt(i))
//       togglePiece at i, i

//Create starting positions array
//Call forEach on possible starting positions
//  Pass each item into helper function
//  solutionCount += return from helper

// return solutionCount

// const countSolution = function(n) {
//   rows.forEach(function(item, i) {

//   });
// };

// Helper function:
//   Set first row equal to this;
//   call for each on remaining rows [0, 0, 0, 0]
//     togglePiece at i, i
//     if (board.hasColConflicts(i) || board.hasRowConflictAt(i))
//       togglePiece at i, i

//Create starting positions array
//Call forEach on possible starting positions
//  Pass each item into helper function
//  solutionCount += return from helper

// return solutionCount

//helper function with r param
//  for loop for column between 0 and n
//    try to toggle; if it fails toggle back
//    else, recurse on next rowand after it returns back, toggle it back


window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let board = new Board({ n });
  let rows = board.rows();

  // [1, 0, 0, 0]
  // [0, 0, 1, 0]
  // [0, 0, 0, 0]
  // [0, 0, 0, 0]
  const helper = function(board) {
    if (solutionCount === n) {
      return;
    }

    rows.forEach(function(row, i) {
      board.togglePiece(i, i);
      if (board.hasAnyRooksConflicts()) {
        row[i] = 2;
      }
      helper(board);
    });
    solutionCount++;
  };

  let startingPosition = findNRooksSolution(n);
  startingPosition.forEach(function(item, i) {
    rows[0] = item;
    helper(board);
  });


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({ n });

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
