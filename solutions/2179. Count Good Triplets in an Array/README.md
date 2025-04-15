# 2179. Count Good Triplets in an Array

## Hard

You are given two 0-indexed arrays `nums1` and `nums2` of length `n`, both of which are permutations of
`[0, 1, ..., n - 1]`. A good triplet is a set of `3` distinct values which are present in increasing order by position
both in `nums1` and `nums2`. In other words, if we consider `pos1v` as the index of the value `v` in `nums1` and `pos2v`
as the index of the value `v` in `nums2`, then a good triplet will be a set `(x, y, z)` where `0 <= x, y, z <= n - 1`,
such that `pos1x < pos1y < pos1z` and `pos2x < pos2y < pos2z`. Return the total number of good triplets.

### Constraints:

- `n == nums1.length == nums2.length`
- `3 <= n <= 10^5`
- `0 <= nums1[i], nums2[i] <= n - 1`
- `nums1` and `nums2` are permutations of `[0, 1, ..., n - 1]`.
