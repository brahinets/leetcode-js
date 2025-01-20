# 2661. First Completely Painted Row or Column

## Medium

You are given a 0-indexed integer array `arr`, and an `m x n` integer matrix `mat`. `arr` and `mat` both contain all the
integers in the range `[1, m * n]`. Go through each index `i` in `arr` starting from index `0` and paint the cell in mat
containing the integer `arr[i]`. Return the smallest index `i` at which either a row or a column will be completely
painted in `mat`.

### Constraints:

- `m == mat.length`
- `n = mat[i].length`
- `arr.length == m * n`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `1 <= arr[i], mat[r][c] <= m * n`
- All the integers of `arr` are unique.
- All the integers of `mat` are unique.
