# 3348. Smallest Divisible Digit Product II

## Hard

You are given a string `num` which represents a positive integer, and an integer `t`.

A number is called zero-free if none of its digits are `0`.

Return a string representing the smallest zero-free number greater than or equal to `num` such that the product of its digits is divisible by `t`. If no such number exists, return `"-1"`.

### Constraints:

- `2 <= num.length <= 2 * 10^5`
- `num` consists only of digits `0` to `9`
- `num` does not contain leading zeros
- `1 <= t <= 10^14`
