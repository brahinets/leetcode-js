# 1937. Maximum Number of Points with Cost

## Medium

You are given an `m x n` integer matrix `points` (0-indexed). Starting with `0` points, you want to maximize the number
of points you can get from the matrix. To gain points, you must pick one cell in each row. Picking the cell at
coordinates `(r, c)` will add `points[r][c]` to your score. However, you will lose points if you pick a cell too far
from the cell that you picked in the previous row. For every two adjacent rows `r` and `r + 1` (where `0 <= r < m - 1`),
picking cells at coordinates `(r, c1)` and `(r + 1, c2)` will subtract `abs(c1 - c2)` from your score. Return the
maximum number of points you can achieve. `abs(x)` is defined as:

- `x` for `x >= 0`
- `-x` for `x < 0`

### Constraints:

- `m == points.length`
- `n == points[r].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `0 <= points[r][c] <= 10^5`
