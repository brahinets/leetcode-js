# 2033. Minimum Operations to Make a Uni-Value Grid

You are given a 2D integer grid of size `m x n` and an integer `x`. In one operation, you can add `x` to or subtract `x`
from any element in the grid. A uni-value grid is a grid where all the elements of it are equal. Return the minimum
number of operations to make the grid uni-value. If it is not possible, return `-1`.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `1 <= x, grid[i][j] <= 10^4`
