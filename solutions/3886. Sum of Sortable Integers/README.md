# 3886. Sum of Sortable Integers

## Hard

You are given an integer array `nums` of length `n`.

An integer `k` is called **sortable** if `k` **divides** `n` and you can sort `nums` in **non-decreasing** order by sequentially performing the following operations:

- Partition `nums` into **consecutive subarrays** of length `k`.
- **Cyclically rotate each subarray independently** any number of times to the left or to the right.

Return an integer denoting the sum of all possible sortable integers `k`.

### Constraints:

- `1 <= n == nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
