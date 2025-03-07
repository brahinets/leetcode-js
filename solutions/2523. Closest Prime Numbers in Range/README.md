# 2523. Closest Prime Numbers in Range

## Medium

Given two positive integers `left` and `right`, find the two integers `num1` and `num2` such that:

- `left <= num1 < num2 <= right`
- Both `num1` and `num2` are prime numbers.
- `num2 - num1` is the minimum amongst all other pairs satisfying the above conditions.

Return the positive integer array `ans = [num1, num2]`. If there are multiple pairs satisfying these conditions, return
the one with the smallest `num1` value. If no such numbers exist, return `[-1, -1]`.

### Constraints:

- `1 <= left <= right <= 10^6`
