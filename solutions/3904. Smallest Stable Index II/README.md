# 3904. Smallest Stable Index II

## Medium

You are given an integer array `nums` of length `n` and an integer `k`. For each index `i`, define its instability score as `max(nums[0..i]) - min(nums[i..n - 1])`. In other words:
- `max(nums[0..i])` is the largest value among the elements from index `0` to index `i`.
- `min(nums[i..n - 1])` is the smallest value among the elements from index `i` to index `n - 1`.

An index `i` is called stable if its instability score is less than or equal to `k`.

Return the smallest stable index. If no such index exists, return `-1`.

 
### Constraints:

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`
