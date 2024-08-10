# 959. Regions Cut By Slashes

## Medium

An `n x n` grid is composed of `1 x 1` squares where each `1 x 1` square consists of a `/`, `\`, or blank space ` `.
These characters divide the square into contiguous regions. Given the grid `grid` represented as a string array, return
the number of regions. Note that backslash characters are escaped, so a `\` is represented as `\\`.

### Constraints:

- `n == grid.length == grid[i].length`
- `1 <= n <= 30`
- `grid[i][j]` is either `/`, `\`, or ` `
