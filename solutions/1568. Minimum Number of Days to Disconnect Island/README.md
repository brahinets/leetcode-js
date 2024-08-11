# 1568. Minimum Number of Days to Disconnect Island

## Hard

You are given an `m x n` binary grid `grid` where `1` represents land and `0` represents water. An island is a maximal
4-directionally (horizontal or vertical) connected group of `1`'s. The grid is said to be connected if we have exactly
one island, otherwise is said disconnected. In one day, we are allowed to change any single land cell `(1)` into a water
cell `(0)`. Return the minimum number of days to disconnect the grid.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 30`
- `grid[i][j]` is either `0` or `1`
