# 1074. Number of Submatrices That Sum to Target

## Hard

Given a `matrix` and a `target`, return the number of non-empty submatrices that sum to target. A
submatrix `x1, y1, x2, y2` is the set of all cells `matrix[x][y]` with `x1 <= x <= x2` and `y1 <= y <= y2`. Two
submatrices `(x1, y1, x2, y2)` and `(x1', y1', x2', y2')` are different if they have some coordinate that is different:
for example, if `x1 != x1'`.

### Constraints:

- `1 <= matrix.length <= 100`
- `1 <= matrix[0].length <= 100`
- `-1000 <= matrix[i] <= 1000`
- `-10^8 <= target <= 10^8`
