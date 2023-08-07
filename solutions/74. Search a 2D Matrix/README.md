# 74. Search a 2D Matrix

## Medium

You are given an `m x n` integer matrix `matrix` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.
- Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in `O(log(m * n))` time complexity.

### Constraints:

`m == matrix.length`
`n == matrix[i].length`
`1 <= m, n <= 100`
`-10^4 <= matrix[i][j], target <= 10^4`
