# 2482. Difference Between Ones and Zeros in Row and Column

## Medium

You are given a 0-indexed `m x n` binary matrix grid. A 0-indexed `m x n` difference matrix `diff` is created with the
following procedure:

- Let the number of ones in the `ith` row be `onesRowi`
- Let the number of ones in the `jth` column be `onesColj`
- Let the number of zeros in the `ith` row be `zerosRowi`
- Let the number of zeros in the `jth` column be `zerosColj`
- `diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj`

Return the difference matrix `diff`.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `grid[i][j]` is either `0` or `1`
