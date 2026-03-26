# 3548. Equal Sum Grid Partition II

## Hard

Given an `m x n` matrix `grid` of positive integers, determine if you can make **either one horizontal or one vertical cut** such that:

- Both resulting sections are **non-empty**
- The sums of both sections are **equal**, or can be made equal by **discounting at most one cell** from either section
- If a cell is discounted, the **rest of that section must remain connected**

Return `true` if such a partition exists; otherwise return `false`.

### Constraints:

- `1 <= m == grid.length <= 10^5`
- `1 <= n == grid[i].length <= 10^5`
- `2 <= m * n <= 10^5`
- `1 <= grid[i][j] <= 10^5`
