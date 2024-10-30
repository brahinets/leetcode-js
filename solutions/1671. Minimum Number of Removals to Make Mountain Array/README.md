# 1671. Minimum Number of Removals to Make Mountain Array

## Hard

You may recall that an array `arr` is a mountain array if and only if:

- `arr.length >= 3`
- There exists some index i (0-indexed) with `0 < i < arr.length - 1` such that:
    - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
    - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

Given an integer array `nums`, return the minimum number of elements to remove to make `nums` a mountain array.

### Constraints:

- `3 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^9`
- It is guaranteed that you can make a mountain array out of `nums`.
