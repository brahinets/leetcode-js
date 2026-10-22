# 3942. Minimum Operations to Sort a Permutation

## Medium

You are given an integer array `nums` of length `n`, where `nums` is a permutation of the integers from 0 to `n - 1`.

You may perform **only** the following operations:

- **Reverse** the entire array.
- **Rotate Left by One**: Move the first element to the end of the array, and rest elements to left by one position.

Return an integer denoting the **minimum** number of operations required to sort the array in **increasing** order. If it is **not possible** to sort the array using only the given operations, return -1.

### Constraints:

- `1 <= n == nums.length <= 10^5`
- `0 <= nums[i] <= n - 1`
- `nums` is a permutation of integers from 0 to `n - 1`.
