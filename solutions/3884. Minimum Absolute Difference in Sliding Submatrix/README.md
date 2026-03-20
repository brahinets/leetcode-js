# 3884. Minimum Absolute Difference in Sliding Submatrix

## Medium

You are given an `m x n` integer matrix `grid` and an integer `k`.

For every contiguous `k x k` submatrix of `grid`, compute the **minimum absolute difference** between any two **distinct** values within that submatrix.

Return a 2D array `ans` of size `(m - k + 1) x (n - k + 1)`, where `ans[i][j]` is the minimum absolute difference in the submatrix whose top-left corner is `(i, j)` in `grid`.

**Note:** If all elements in the submatrix have the same value, the answer will be 0.

### Constraints:

- `1 <= m == grid.length <= 30`
- `1 <= n == grid[i].length <= 30`
- `-10^5 <= grid[i][j] <= 10^5`
- `1 <= k <= min(m, n)`
