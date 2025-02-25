# 1765. Map of Highest Peak

## Medium

You are given an integer matrix `isWater` of size `m x n` that represents a map of land and water cells.

- If `isWater[i][j] == 0`, cell `(i, j)` is a land cell.
- If `isWater[i][j] == 1`, cell `(i, j)` is a water cell.

You must assign each cell a height in a way that follows these rules: The height of each cell must be non-negative. If
the cell is a water cell, its height must be `0`. Any two adjacent cells must have an absolute height difference of at
most `1`. A cell is adjacent to another cell if the former is directly north, east, south, or west of the latter (i.e.,
their sides are touching). Find an assignment of heights such that the maximum height in the matrix is maximized. Return
an integer matrix `height` of size `m x n` where `height[i][j]` is cell `(i, j)`'s height. If there are multiple
solutions, return any of them.

### Constraints:

- `m == isWater.length`
- `n == isWater[i].length`
- `1 <= m, n <= 1000`
- `isWater[i][j]` is `0` or `1`.
- There is at least one water cell.

**Note:** This question is the same as 542: https://leetcode.com/problems/01-matrix/
