# 3583. Count Special Triplets

## Medium

You are given an integer array `nums`. A special triplet is defined as a triplet of indices `(i, j, k)` such that:

- `0 <= i < j < k < n`, where `n = nums.length`
- `nums[i] == nums[j] * 2`
- `nums[k] == nums[j] * 2`

Return the total number of special triplets in the array. Since the answer may be large, return it modulo `10^9 + 7`.

### Constraints:

- `3 <= n == nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`
