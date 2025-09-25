# 120. Triangle

## Medium

Given a `triangle` array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent
number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or
index `i + 1` on the next row.

### Constraints:

- `1 <= triangle.length <= 200`
- `triangle[0].length == 1`
- `triangle[i].length == triangle[i - 1].length + 1`
- `-10^4 <= triangle[i][j] <= 10^4`

**Follow up:** Could you do this using only `O(n)` extra space, where n is the total number of rows in the triangle?
