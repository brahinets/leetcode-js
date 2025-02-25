# 995. Minimum Number of K Consecutive Bit Flips

## Hard

You are given a binary array `nums` and an integer `k`. A k-bit flip is choosing a subarray of length `k` from `nums`
and simultaneously changing every `0` in the subarray to `1`, and every `1` in the subarray to `0`. Return the minimum
number of k-bit flips required so that there is no `0` in the array. If it is not possible, return `-1`. A subarray is a
contiguous part of an array.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= k <= nums.length`
