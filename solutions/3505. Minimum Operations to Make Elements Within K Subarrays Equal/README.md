# 3505. Minimum Operations to Make Elements Within K Subarrays Equal

## Hard

You are given an integer array `nums` and two integers, `x` and `k`. You can perform the following operation any number of times (**including zero**):

- Increase or decrease any element of `nums` by 1.

Return the **minimum** number of operations needed to have **at least** `k` _non-overlapping subarrays_ of size **exactly** `x` in `nums`, where all elements within each subarray are equal.

### Constraints:

- `2 <= nums.length <= 10^5`
- `-10^6 <= nums[i] <= 10^6`
- `2 <= x <= nums.length`
- `1 <= k <= 15`
- `2 <= k * x <= nums.length`
