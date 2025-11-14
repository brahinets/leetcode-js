# 2536. Increment Submatrices by One

## Medium

You are given a positive integer `n`, indicating that we initially have an `n x n` 0-indexed integer matrix `mat` filled
with zeroes. You are also given a 2D integer array `query`. For each `query[i] = [row1i, col1i, row2i, col2i]`, you
should do the following operation: Add `1` to every element in the submatrix with the top left corner `(row1i, col1i)`
and the bottom right corner `(row2i, col2i)`. That is, add `1` to `mat[x][y]` for all `row1i <= x <= row2i` and
`col1i <= y <= col2i`. Return the matrix mat after performing every query.

### Constraints:

- `1 <= n <= 500`
- `1 <= queries.length <= 10^4`
- `0 <= row1i <= row2i < n`
- `0 <= col1i <= col2i < n`
