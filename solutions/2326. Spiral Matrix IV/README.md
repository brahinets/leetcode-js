# 2326. Spiral Matrix IV

## Medium

You are given two integers `m` and `n`, which represent the dimensions of a matrix. You are also given the `head` of a
linked list of integers. Generate an `m x n` matrix that contains the integers in the linked list presented in spiral
order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with `-1`.
Return the generated matrix.

### Constraints:

- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- The number of nodes in the list is in the range `[1, m * n]`.
- `0 <= Node.val <= 1000`
