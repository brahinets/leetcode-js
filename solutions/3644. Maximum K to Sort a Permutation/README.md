# 3644. Maximum K to Sort a Permutation

## Medium

You are given an integer array `nums` of length `n`, where `nums` is a **permutation** of the numbers in the range `[0..n - 1]`.

You may swap elements at indices `i` and `j` **only if** `nums[i] AND nums[j] == k`, where `AND` denotes the bitwise AND operation and `k` is a **non-negative** integer.

Return the **maximum** value of `k` such that the array can be sorted in **non-decreasing** order using any number of such swaps. If `nums` is already sorted, return 0.

### Constraints:

- `1 <= n == nums.length <= 10^5`
- `0 <= nums[i] <= n - 1`
- `nums` is a permutation of integers from `0` to `n - 1`.
