# 2503. Maximum Number of Points From Grid Queries

## Hard

You are given an `m x n` integer matrix `grid` and an array `queries` of size `k`. Find an array `answer` of size `k`
such that for each integer `queries[i]` you start in the top left cell of the matrix and repeat the following process:
If `queries[i]` is strictly greater than the value of the current cell that you are in, then you get one point if it is
your first time visiting this cell, and you can move to any adjacent cell in all 4 directions: up, down, left, and
right. Otherwise, you do not get any points, and you end this process. After the process, `answer[i]` is the maximum
number of points you can get. Note that for each query you are allowed to visit the same cell multiple times. Return the
resulting array `answer`.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 1000`
- `4 <= m * n <= 10^5`
- `k == queries.length`
- `1 <= k <= 10^4`
- `1 <= grid[i][j], queries[i] <= 10^6`
