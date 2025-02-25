# 1368. Minimum Cost to Make at Least One Valid Path in a Grid

## Hard

Given an `m x n` grid. Each cell of the grid has a sign pointing to the next cell you should visit if you are currently
in this cell. The sign of `grid[i][j]` can be:

- `1` which means go to the cell to the right. (i.e go from `grid[i][j]` to `grid[i][j + 1]`)
- `2` which means go to the cell to the left. (i.e go from `grid[i][j]` to `grid[i][j - 1]`)
- `3` which means go to the lower cell. (i.e go from `grid[i][j]` to `grid[i + 1][j]`)
- `4` which means go to the upper cell. (i.e go from `grid[i][j]` to `grid[i - 1][j]`)

Notice that there could be some signs on the cells of the grid that point outside the grid. You will initially start at
the upper left cell `(0, 0)`. A valid path in the grid is a path that starts from the upper left cell `(0, 0)` and ends
at the bottom-right cell `(m - 1, n - 1)` following the signs on the grid. The valid path does not have to be the
shortest. You can modify the sign on a cell with `cost = 1`. You can modify the sign on a cell one time only. Return the
minimum cost to make the grid have at least one valid path.

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `1 <= grid[i][j] <= 4`
