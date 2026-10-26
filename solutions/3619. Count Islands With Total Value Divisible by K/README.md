# 3619. Count Islands With Total Value Divisible by K

## Medium

You are given an `m x n` matrix `grid` and a positive integer `k`. An island is a group of positive integers
(representing land) that are 4-directionally connected (horizontally or vertically).

The total value of an island is the sum of the values of all cells in the island.

Return the number of islands with a total value divisible by `k`.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 10^5`
- `0 <= grid[i][j] <= 10^6`
- `1 <= k <= 10^6`
