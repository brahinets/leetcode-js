# 2946. Matrix Similarity After Cyclic Shifts

## Easy

Given an `m x n` integer matrix `mat` and an integer `k`, even-indexed rows are cyclically shifted left and odd-indexed rows are cyclically shifted right, repeated `k` times.

Return `true` if the resulting matrix is identical to the original matrix, otherwise return `false`.

### Constraints:

- `1 <= m <= 10^5`
- `1 <= n <= 10^5`
- `2 <= m * n <= 10^5`
- `1 <= mat[i][j] <= 10^5`
- `1 <= k <= 10^9`
