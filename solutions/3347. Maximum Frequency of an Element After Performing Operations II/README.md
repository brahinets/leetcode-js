# 3347. Maximum Frequency of an Element After Performing Operations II

## Hard

You are given an integer array `nums` and two integers `k` and `numOperations`.

You must perform an operation `numOperations` times on `nums`, where in each operation you:

- Select an index `i` that was not selected in any previous operations.
- Add an integer in the range `[-k, k]` to `nums[i]`.
- Return the maximum possible frequency of any element in nums after performing the operations.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`
- `0 <= numOperations <= nums.length`
