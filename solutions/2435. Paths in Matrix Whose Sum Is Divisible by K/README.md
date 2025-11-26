# 2435. Paths in Matrix Whose Sum Is Divisible by K

## Hard

You are given a 0-indexed `m x n` integer matrix `grid` and an integer `k`. You are currently at position `(0, 0)` and
you want to reach position `(m - 1, n - 1)` moving only down or right. Return the number of paths where the sum of the
elements on the path is divisible by `k`. Since the answer may be very large, return it modulo `10^9 + 7`.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 5 * 10^4`
- `1 <= m * n <= 5 * 10^4`
- `0 <= grid[i][j] <= 100`
- `1 <= k <= 50`
