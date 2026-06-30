# 3629. Minimum Jumps to Reach End via Prime Teleportation

## Medium

You have an integer array `nums` of length `n`. Starting at index `0`, your goal is to reach index `n - 1`.

From any index `i`, you can perform one of the following operations:

- **Adjacent Step**: Jump to index `i + 1` or `i - 1`, if the index is within bounds.
- **Prime Teleportation**: If `nums[i]` is a prime number `p`, you may instantly jump to any index `j != i` such that `nums[j] % p == 0`.

Return the minimum number of jumps required to reach index `n - 1`.

**Constraints:**

- `1 <= n == nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
