# 3742. Maximum Path Score in a Grid

## Medium

You are given an `m x n` grid where each cell contains a value of `0`, `1`, or `2`. You start at the top-left corner `(0, 0)` and want to reach the bottom-right corner `(m - 1, n - 1)` by moving only right or down.

Each cell contributes to your score and incurs a cost:
- `0`: score +0, cost 0
- `1`: score +1, cost 1
- `2`: score +2, cost 1

You are also given an integer `k`. Return the maximum score achievable without exceeding a total cost of `k`, or `-1` if no valid path exists. The starting cell is always `0`.

### Constraints:

- `1 <= m, n <= 200`
- `0 <= k <= 1000`
- `grid[0][0] == 0`
- `0 <= grid[i][j] <= 2`
