import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  let emptyColumn = new Set();
  let count=0;
  matrix.forEach((row, indexRow)=>{
    row.forEach((column, indexColumn)=>{
      if(emptyColumn.has(indexColumn)){
        return;
      }
      if(column===0){
        emptyColumn.add(indexColumn);
        return;
      }
      count+= column;
    })
  })
  return count;
  // remove line with error and write your code here
}
