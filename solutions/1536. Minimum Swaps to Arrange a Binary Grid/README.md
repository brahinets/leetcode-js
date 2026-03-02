# 1536. Minimum Swaps to Arrange a Binary Grid

## Medium

Given an `n x n` binary `grid`, in one step you can choose two **adjacent rows** of the grid and swap them.

A grid is said to be **valid** if all the cells above the main diagonal are zeros.

Return _the minimum number of steps_ needed to make the grid valid, or **-1** if the grid cannot be valid.

The main diagonal of a grid is the diagonal that starts at cell `(0, 0)` and ends at cell `(n - 1, n - 1)`.

### Constraints:

- `n == grid.length == grid[i].length`
- `1 <= n <= 200`
- `grid[i][j]` is either `0` or `1`
