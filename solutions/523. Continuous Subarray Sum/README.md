# 523. Continuous Subarray Sum

## Medium

Given an integer array `nums` and an integer `k`, return true if `nums` has a good subarray or `false` otherwise. A good
subarray is a subarray where: its length is at least two, and the sum of the elements of the subarray is a multiple of
`k`. Note that:

- A subarray is a contiguous part of the array.
- An integer `x` is a multiple of `k` if there exists an integer `n` such that `x = n * k`. `0` is always a multiple of
  `k`.

### Constraints:

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= sum(nums[i]) <= 2^31 - 1`
- `1 <= k <= 2^31 - 1`
