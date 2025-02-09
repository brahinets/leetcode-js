# 2009. Minimum Number of Operations to Make Array Continuous

## Hard

You are given an integer array `nums`. In one operation, you can replace any element in `nums` with any integer. `nums`
is considered continuous if both of the following conditions are fulfilled: All elements in `nums` are unique. The
difference between the maximum element and the minimum element in nums equals nums.length - 1. For example,
`nums = [4, 2, 5, 3]` is continuous, but `nums = [1, 2, 3, 5, 6]` is not continuous. Return the minimum number of
operations to make 'nums' continuous.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
