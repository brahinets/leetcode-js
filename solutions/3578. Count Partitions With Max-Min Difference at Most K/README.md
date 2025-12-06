# 3578. Count Partitions With Max-Min Difference at Most K

## Medium

You are given an integer array `nums` and an integer `k`. Your task is to partition `nums` into one or more non-empty
contiguous segments such that in each segment, the difference between its maximum and minimum elements is at most `k`.
Return the total number of ways to partition `nums` under this condition. Since the answer may be too large, return it
modulo `10^9 + 7`.

### Constraints:

- `2 <= nums.length <= 5 * 10^4`
- `1 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`
