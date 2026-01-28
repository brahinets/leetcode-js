# 3651. Minimum Cost Path with Teleportations

## Hard

You are given an `m x n` integer array `grid` and an integer `k`. You start at the top-left cell `(0, 0)` and your goal is to reach the bottom-right cell `(m - 1, n - 1)`.

There are two types of moves:
- Normal move — move right or down; cost equals the destination cell's value.
- Teleportation — jump from `(i, j)` to any `(x, y)` with `grid[x][y] <= grid[i][j]` at zero cost; you may teleport at most `k` times.

Return the minimum total cost to reach `(m - 1, n - 1)` from `(0, 0)`.

### Constraints:

- `2 <= m, n <= 80`
- `m == grid.length`
- `n == grid[i].length`
- `0 <= grid[i][j] <= 10^4`
- `0 <= k <= 10`

