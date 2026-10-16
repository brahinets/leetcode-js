# 2916. Subarrays Distinct Element Sum of Squares II

## Hard

You are given a **0-indexed** integer array `nums`.

The **distinct count** of a subarray of `nums` is defined as:

- Let `nums[i..j]` be a subarray of `nums` consisting of all the indices from `i` to `j` such that `0 <= i <= j < nums.length`. Then the number of distinct values in `nums[i..j]` is called the distinct count of `nums[i..j]`.

Return *the sum of the* ***squares*** *of* ***distinct counts*** *of all subarrays of* `nums`.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

A subarray is a contiguous **non-empty** sequence of elements within an array.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
