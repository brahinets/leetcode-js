# 3876. Construct Uniform Parity Array II

## Medium

You are given an array `nums1` of `n` **distinct** integers.

You want to construct another array `nums2` of length `n` such that the elements in `nums2` are either **all odd or all even**.

For each index `i`, you must choose **exactly one** of the following (in any order):

- `nums2[i] = nums1[i]`​​​​​​​
- `nums2[i] = nums1[i] - nums1[j]`, for an index `j != i`, such that `nums1[i] - nums1[j] >= 1`

Return `true` if it is possible to construct such an array, otherwise return `false`.

### Constraints:

- `1 <= n == nums1.length <= 10^5`
- `1 <= nums1[i] <= 10^9`
- `nums1` consists of distinct integers.
