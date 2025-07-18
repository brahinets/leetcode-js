# 2163. Minimum Difference in Sums After Removal of Elements

## Hard

You are given a 0-indexed integer array `nums` consisting of `3 * n` elements. You are allowed to remove any subsequence
of elements of size exactly `n` from `nums`. The remaining `2 * n` elements will be divided into two equal parts:

- The first `n` elements belonging to the first part and their sum is `sum_first`.
- The next `n` elements belonging to the second part and their sum is `sum_second`.

The difference in sums of the two parts is denoted as `sum_first - sum_second`. For example, if `sumfirst = 3` and
`sumsecond = 2`, their difference is `1`. Similarly, if `sumfirst = 2` and `sumsecond = 3`, their difference is `-1`.
Return the minimum difference possible between the sums of the two parts after the removal of `n` elements.

### Constraints:

– `nums.length == 3 * n`
– `1 <= n <= 10^5`
– `1 <= nums[i] <= 10^5`
