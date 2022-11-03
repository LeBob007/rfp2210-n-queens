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
  // let rows = board.rows();

  // // [1, 0, 0, 0]
  // // [0, 0, 1, 0]
  // // [0, 0, 0, 0]
  // // [0, 0, 0, 0]
  // const helper = function(board) {
  //   if (solutionCount === n) {
  //     return;
  //   }

  //   rows.forEach(function(row, i) {
  //     board.togglePiece(i, i);
  //     if (board.hasAnyRooksConflicts()) {
  //       row[i] = 2;
  //     }
  //     helper(board);
  //   });
  //   solutionCount++;
  // };

  // let startingPosition = findNRooksSolution(n);
  // startingPosition.forEach(function(item, i) {
  //   rows[0] = item;
  //   helper(board);
  // });

  const helper = function(r) {
    if (r === n) {
      solutionCount++;
      return;
    }
    for (let c = 0; c < n; c++) {
      board.togglePiece(r, c);
      if (!board.hasColConflictAt(c)) {
        helper(r + 1);
      }
      board.togglePiece(r, c);
    }
  };

  helper(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

// arr of solution

// Helper Function
//  currentRow.forEach()
//    togglepiece(rowIndex, i)
//    check if no conflict with checking helper
//      invoke helper function with board, next row, n, acc
//    togglePiece(rowIndex, i)
//  if rowIndex === n
//    push to arr


// Invoke helper with board, next row, n, solutionCount/acc
window.findNQueensSolution = function(n) {
  var solution = new Board({ n: n });
  var rows = solution.rows();
  let arrayOfSolutions = [];

  const findSolutions = (nRow) => {
    if (nRow === n) {
      console.log('row', solution.rows());
      arrayOfSolutions.push(solution.rows());
      return;
    }
    for (let i = 0; i < n; i++) {
      console.log('before, ', solution.rows()[nRow][i]);
      solution.togglePiece(nRow, i);
      console.log('after, ', solution.rows()[nRow][i]);
      console.log('collision, ', solution.hasAnyQueenConflictsOn(nRow, i));
      console.log('row3', solution.rows()[nRow]);
      console.log('row4', solution.rows());
      if (!solution.hasAnyQueenConflictsOn(nRow, i)) {
        console.log('row2', solution.rows());
        findSolutions(nRow + 1);
      }

      solution.togglePiece(nRow, i);
    }

    // if (nRow === n - 1) {
    //   console.log('row', collection.rows());
    //   arrayOfSolutions.push(solution.rows());
    //   return;
    // }
    // rows[nRow].forEach((item, i, collection) => {
    //   console.log('1, before ', collection[item]);
    //   solution.togglePiece(nRow, i);
    //   console.log('1, after ', collection[item]);
    //   console.log('1, ', collection);
    //   if (!solution.hasAnyQueenConflictsOn(nRow, i)) {
    //     console.log('2, ', collection);
    //     findSolutions(nRow + 1);
    //   }
    //   console.log('3, length of solutions ', arrayOfSolutions.length);
    //   solution.togglePiece(nRow, i);
    // });
  };

  findSolutions(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(arrayOfSolutions[0]));
  return arrayOfSolutions[0];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  let rows = solution.rows();

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
