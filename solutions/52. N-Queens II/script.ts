import {solveNQueens} from "../51. N-Queens/script"

export {totalNQueens}

function totalNQueens(n: number): number {
    return solveNQueens(n).length;
}
