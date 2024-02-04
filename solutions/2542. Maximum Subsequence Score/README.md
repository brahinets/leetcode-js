# 2542. Maximum Subsequence Score

## Medium

You are given two 0-indexed integer arrays `nums1` and `nums2` of equal length `n` and a positive integer `k`. You must
choose a subsequence of indices from `nums1` of length `k`. For chosen indices `i0, i1, ..., ik - 1`, your score is
defined as: The sum of the selected elements from `nums1` multiplied with the minimum of the selected elements from
`nums2`. It can defined simply as:
`(nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1])`. Return the maximum
possible score. A subsequence of indices of an array is a set that can be derived from the set
`{0, 1, ..., n-1}` by deleting some or no elements.

### Constraints:

- `n == nums1.length == nums2.length`
- `1 <= n <= 10^5`
- `0 <= nums1[i], nums2[j] <= 10^5`
- `1 <= k <= n`
