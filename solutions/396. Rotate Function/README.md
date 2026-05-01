# 396. Rotate Function

## Medium

You are given an integer array `nums` of length `n`.

Assume `Bk` to be an array obtained by rotating `nums` by `k` positions clock-wise. We define the rotation function `F` on `nums` as follows:

`F(k) = 0 * Bk[0] + 1 * Bk[1] + 2 * Bk[2] + ... + (n - 1) * Bk[n - 1]`

Return the maximum value of `F(0), F(1), ..., F(n - 1)`.

The test cases are generated so that the answer fits in a **32-bit** integer.

### Constraints:

- `n == nums.length`
- `1 <= n <= 10^5`
- `-100 <= nums[i] <= 100`
