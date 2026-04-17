# 3761. Minimum Absolute Distance Between Mirror Pairs

## Medium

You are given an integer array `nums`. A **mirror pair** is a pair of indices `(i, j)` where `0 <= i < j < nums.length` and `reverse(nums[i]) == nums[j]`.

`reverse(x)` denotes the integer formed by reversing the digits of `x`. Leading zeros are omitted after reversing (for example, `reverse(120) = 21`).

Return the **minimum absolute distance** `abs(i - j)` between the indices of any mirror pair. If no mirror pair exists, return `-1`.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
