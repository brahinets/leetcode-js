# 3660. Jump Game IX

## Medium

You are given an integer array `nums`. From any index `i`, you can jump to another index `j` under the following rules:

- Jump to index `j` where `j > i` is allowed only if `nums[j] < nums[i]`.
- Jump to index `j` where `j < i` is allowed only if `nums[j] > nums[i]`.

For each index `i`, find the maximum value in `nums` that can be reached by following any sequence of valid jumps starting at `i`.

Return an array `ans` where `ans[i]` is the maximum value reachable starting from index `i`.

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
