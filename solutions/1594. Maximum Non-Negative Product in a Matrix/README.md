# 1594. Maximum Non-Negative Product in a Matrix

## Medium

You are given a `m x n` matrix `grid`. Initially, you are located at the top-left corner `(0, 0)`, and in each step, you can only move right or down in the matrix.

Among all possible paths starting from the top-left corner `(0, 0)` and ending in the bottom-right corner `(m - 1, n - 1)`, find the path with the **maximum non-negative product**. The product of a path is the product of all integers in the grid cells visited along the path.

Return the _maximum non-negative product_ **modulo** `10^9 + 7`. If the maximum product is **negative**, return `-1`.

Notice that the modulo is performed after getting the maximum product.

### Constraints:

- `1 <= m, n <= 15`
- `-4 <= grid[i][j] <= 4`
