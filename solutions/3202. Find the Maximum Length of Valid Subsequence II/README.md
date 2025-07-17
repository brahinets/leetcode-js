# 3202. Find the Maximum Length of Valid Subsequence II

## Medium

You are given an integer array `nums` and a positive integer `k`. A subsequence sub of `nums` with length `x` is called
valid if it satisfies: `(sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] + sub[x - 1]) % k`. Return
the length of the longest valid subsequence of `nums`.

### Constraints:

- `2 <= nums.length <= 10^3`
- `1 <= nums[i] <= 10^7`
- `1 <= k <= 10^3`
