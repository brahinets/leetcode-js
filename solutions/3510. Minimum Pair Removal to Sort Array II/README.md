# Minimum Pair Removal to Sort Array II

## Hard

Given an array `nums`, you can perform the following operation any number of times:

- Select the **adjacent pair** with the **minimum sum** in `nums`. If multiple such pairs exist, choose the **leftmost** one.
- Replace the pair with their sum.

Return the **minimum number of operations** needed to make the array **non-decreasing**.

An array is said to be **non-decreasing** if each element is greater than or equal to its previous element (if it exists).

### Constraints:

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
