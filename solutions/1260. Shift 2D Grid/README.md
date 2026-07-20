# Shift 2D Grid

## Easy

Given a 2D grid of dimensions `m x n` and an integer `k`, shift the grid `k` times. In each shift operation:

- Elements at `grid[i][j]` move to `grid[i][j + 1]`
- Elements at `grid[i][n - 1]` move to `grid[i + 1][0]`
- Elements at `grid[m - 1][n - 1]` move to `grid[0][0]`

Return the resulting 2D grid after applying `k` shift operations.

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m <= 50`
- `1 <= n <= 50`
- `-1000 <= grid[i][j] <= 1000`
- `0 <= k <= 100`
