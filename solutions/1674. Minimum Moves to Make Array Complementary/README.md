# 1674. Minimum Moves to Make Array Complementary

## Medium

You are given an integer array `nums` of **even** length `n` and an integer `limit`. In one move, you can replace any
integer from `nums` with another integer between `1` and `limit`, inclusive.

The array `nums` is **complementary** if for all indices `i` (**0-indexed**),
`nums[i] + nums[n - 1 - i]` equals the same number.

Return the **minimum** number of moves required to make `nums` **complementary**.

### Constraints:

- `n == nums.length`
- `2 <= n <= 10^5`
- `1 <= nums[i] <= limit <= 10^5`
- `n` is even
