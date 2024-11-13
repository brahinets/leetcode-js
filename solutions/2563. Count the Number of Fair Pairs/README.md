# 2563. Count the Number of Fair Pairs

## Medium

Given a 0-indexed integer array `nums` of size `n` and two integers `lower` and `upper`, return the number of fair
pairs. A pair `(i, j)` is fair if: `0 <= i < j < n`, and `lower <= nums[i] + nums[j] <= upper`

### Constraints:

- `1 <= nums.length <= 10^5`
- `nums.length == n`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= lower <= upper <= 10^9`
