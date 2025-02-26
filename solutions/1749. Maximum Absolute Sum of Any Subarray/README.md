# 1749. Maximum Absolute Sum of Any Subarray

## Medium

You are given an integer array `nums`. The absolute sum of a subarray `[nums_l, nums_l+1, ..., nums_r-1, nums_r]` is
`abs(nums_l + nums_l+1 + ... + nums_r-1 + nums_r)`. Return the maximum absolute sum of any (possibly empty) subarray of
`nums`. Note that `abs(x)` is defined as follows:

- If `x` is a negative integer, then `abs(x) = -x`.
- If `x` is a non-negative integer, then `abs(x) = x`.

### Constraints:

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
