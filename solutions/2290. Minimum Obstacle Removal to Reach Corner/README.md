# 2290. Minimum Obstacle Removal to Reach Corner

## Hard

You are given a 0-indexed 2D integer array `grid` of size `m x n`. Each cell has one of two values:

- `0` represents an empty cell,
- `1` represents an obstacle that may be removed.

You can move up, down, left, or right from and to an empty cell. Return the minimum number of obstacles to remove so you
can move from the upper left corner `(0, 0)` to the lower right corner `(m - 1, n - 1)`.

### Constraints:

– `m == grid.length`
– `n == grid[i].length`
– `1 <= m, n <= 10^5`
– `2 <= m * n <= 10^5`
– `grid[i][j]` is either `0` or `1`
– `grid[0][0] == grid[m - 1][n - 1] == 0`
