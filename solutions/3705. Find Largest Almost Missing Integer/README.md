# 3705. Find Largest Almost Missing Integer

## Easy

You are given an integer array `nums` and an integer `k`.

An integer `x` is considered **almost missing** from `nums` if `x` appears in *exactly* one subarray of size `k`
within `nums`.

Return the **largest** almost missing integer from `nums`. If no such integer exists, return `-1`.

A **subarray** is a contiguous sequence of elements within an array.

### Constraints:

- `1 <= nums.length <= 50`
- `0 <= nums[i] <= 50`
- `1 <= k <= nums.length`
