# 3741. Minimum Distance Between Three Equal Elements II

## Medium

You are given an integer array `nums`. A tuple `(i, j, k)` of 3 distinct indices is **good** if `nums[i] == nums[j] == nums[k]`. The **distance** of a good tuple is `abs(i - j) + abs(j - k) + abs(k - i)`.

Return the minimum possible distance of a good tuple. If no good tuple exists, return `-1`.

### Constraints:

- `1 <= n == nums.length <= 10^5`
- `1 <= nums[i] <= n`
