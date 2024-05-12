# 2373. Largest Local Values in a Matrix

## Easy

You are given an `n x n` integer matrix `grid`. Generate an integer matrix `maxLocal` of size `(n - 2) x (n - 2)` such
that: `maxLocal[i][j]` is equal to the largest value of the `3 x 3` matrix in grid centered around row `i + 1` and
column `j + 1`. In other words, we want to find the largest value in every contiguous `3 x 3` matrix in `grid`. Return
the generated matrix.

### Constraints:

- `n == grid.length == grid[i].length`
- `3 <= n <= 100`
- `1 <= grid[i][j] <= 100`
