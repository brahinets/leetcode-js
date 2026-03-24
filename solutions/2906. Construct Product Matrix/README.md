# 2906. Construct Product Matrix

## Medium

Given a 0-indexed 2D integer matrix `grid` of size `n x m`, construct a product matrix `p` of the same size where `p[i][j]` is equal to the product of all elements in `grid` except `grid[i][j]`. The product is taken modulo `12345`.

Return the product matrix.

### Constraints:

- `1 <= n == grid.length <= 10^5`
- `1 <= m == grid[i].length <= 10^5`
- `2 <= n * m <= 10^5`
- `1 <= grid[i][j] <= 10^9`
