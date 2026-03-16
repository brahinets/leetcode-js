# 1878. Get Biggest Three Rhombus Sums in a Grid

## Medium

You are given an `m x n` integer matrix `grid`.

A **rhombus sum** is the sum of the elements that form the **border** of a regular rhombus shape in `grid`. The rhombus must fit entirely inside the grid. For a rhombus of size 0, it is a single cell. For a rhombus of size `s > 0`, the border consists of `4s` cells along the four diagonal sides.

Return the **biggest three distinct rhombus sums** in the grid in **descending order**. If there are fewer than three distinct values, return all of them.

### Example 1:

```
Input: grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]
Output: [228,216,211]

Explanation:
- 228 = rhombus of size 1 centered at (2,1): border cells 3 + 200 + 5 + 20 = 228
- 216 = rhombus of size 1 centered at (2,3): border cells 2 + 10 + 4 + 200 = 216
- 211 = rhombus of size 1 centered at (3,2): border cells 200 + 4 + 2 + 5 = 211
```

### Example 2:

```
Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: [20,9,8]

Explanation:
- 20 = rhombus of size 1 centered at (1,1): 2 + 6 + 8 + 4 = 20
- 9  = size-0 rhombus at (2,2)
- 8  = size-0 rhombus at (2,1)
```

### Example 3:

```
Input: grid = [[7,7,7]]
Output: [7]
```

### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `1 <= grid[i][j] <= 10^5`
