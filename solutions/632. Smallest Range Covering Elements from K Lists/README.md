# 632. Smallest Range Covering Elements from K Lists

## Hard

You have `k` lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number
from each of the `k` lists. We define the range `[a, b]` is smaller than range `[c, d]` if `b - a < d - c` or `a < c` if
`b - a == d - c`.

### Constraints:

- `nums.length == k`
- `1 <= k <= 3500`
- `1 <= nums[i].length <= 50`
- `-10^5 <= nums[i][j] <= 10^5`
- `nums[i]` is sorted in non-decreasing order.
