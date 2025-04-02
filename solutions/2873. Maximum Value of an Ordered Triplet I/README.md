# 2873. Maximum Value of an Ordered Triplet I

## Easy

You are given a 0-indexed integer array `nums`. Return the maximum value over all triplets of indices `(i, j, k)` such
that `i < j < k`. If all such triplets have a negative value, return `0`. The value of a triplet of indices `(i, j, k)`
is equal to `(nums[i] - nums[j]) * nums[k]`.

### Constraints:

- `3 <= nums.length <= 100`
- `1 <= nums[i] <= 10^6`
