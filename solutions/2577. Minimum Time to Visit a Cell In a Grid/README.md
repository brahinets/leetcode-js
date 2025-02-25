# 2577. Minimum Time to Visit a Cell In a Grid

## Hard

You are given a `m x n` matrix `grid` consisting of non-negative integers where `grid[row][col]` represents the minimum
time required to be able to visit the cell `(row, col)`, which means you can visit the cell `(row, col)` only when the
time you visit it is greater than or equal to `grid[row][col]`. You are standing in the top-left cell of the matrix in
the `0th` second, and you must move to any adjacent cell in the four directions: up, down, left, and right. Each move
you make takes `1` second. Return the minimum time required in which you can visit the bottom-right cell of the matrix.
If you cannot visit the bottom-right cell, then return `-1`.

### Constraints:

– `m == grid.length`
– `n == grid[i].length`
– `2 <= m, n <= 1000`
– `4 <= m * n <= 10^5`
– `0 <= grid[i][j] <= 10^5`
– `grid[0][0] == 0`
