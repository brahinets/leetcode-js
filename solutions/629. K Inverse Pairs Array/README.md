# 629. K Inverse Pairs Array

## Hard

For an integer array `nums`, an inverse pair is a pair of integers `[i, j]` where `0 <= i < j < nums.length`
and `nums[i] > nums[j]`. Given two integers `n` and `k`, return the number of different arrays consist of numbers
from `1` to `n` such that there are exactly `k` inverse pairs. Since the answer can be huge, return it
modulo `10^9 + 7`.

### Constraints:

- `1 <= n <= 1000`
- `0 <= k <= 1000`
