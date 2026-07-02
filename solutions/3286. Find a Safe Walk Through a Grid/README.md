# 3286. Find a Safe Walk Through a Grid

## Medium

You are given an `m x n` binary matrix `grid` and an integer `health`.

You start on the upper-left corner `(0, 0)` and would like to get to the lower-right corner `(m - 1, n - 1)`.

You can move up, down, left, or right from one cell to another adjacent cell as long as your health remains
positive.

Cells `(i, j)` with `grid[i][j] = 1` are considered unsafe and reduce your health by 1.

Return `true` if you can reach the final cell with a health value of 1 or more, and `false` otherwise.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `2 <= m * n`
- `1 <= health <= m + n`
- `grid[i][j]` is either 0 or 1.
