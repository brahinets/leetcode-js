# 1905. Count Sub Islands

## Medium

You are given two `m x n` binary matrices `grid1` and `grid2` containing only `0`'s (representing water) and `1`'s (
representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of
the grid are considered water cells. An island in `grid2` is considered a sub-island if there is an island in `grid1`
that contains all the cells that make up this island in `grid2`. Return the number of islands in `grid2` that are
considered sub-islands.

### Constraints:

- `m == grid1.length == grid2.length`
- `n == grid1[i].length == grid2[i].length`
- `1 <= m, n <= 500`
- `grid1[i][j]` and `grid2[i][j]` are either `0` or `1`
