# 2530. Maximal Score After Applying K Operations

## Medium

You are given a 0-indexed integer array `nums` and an integer `k`. You have a starting score of `0`. In one operation:

- choose an index `i` such that `0 <= i < nums.length`,
- increase your score by `nums[i]`, and
- replace `nums[i]` with `ceil(nums[i] / 3)`.

Return the maximum possible score you can attain after applying exactly `k` operations. The ceiling function `ceil(val)`
is the least integer greater than or equal to val.

### Constraints:

- `1 <= nums.length, k <= 10^5`
- `1 <= nums[i] <= 10^9`
