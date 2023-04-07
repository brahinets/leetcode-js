# 1020. Number of Enclaves

## Medium

You are given an `m x n` binary matrix grid, where `0` represents a sea cell and `1` represents a land cell. A move
consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of
the grid. Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of
moves.

### Constraints:

`m == grid.length`  
`n == grid[i].length`  
`1 <= m, n <= 500`  
`grid[i][j]` is either `0` or `1`.