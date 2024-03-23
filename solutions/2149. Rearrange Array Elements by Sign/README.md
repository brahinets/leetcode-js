# 2149. Rearrange Array Elements by Sign

## Medium

You are given a 0-indexed integer array `nums` of even length consisting of an equal number of positive and negative
integers. You should rearrange the elements of nums such that the modified array follows the given conditions:

- Every consecutive pair of integers have opposite signs.
- For all integers with the same sign, the order in which they were present in nums is preserved.
- The rearranged array begins with a positive integer.

Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

### Constraints:

- `2 <= nums.length <= 2 * 10^5`
- `nums.length` is even
- `1 <= |nums[i]| <= 10^5`
- `nums` consists of equal number of positive and negative integers.
