# 3723. Maximize Sum of Squares of Digits

## Medium

You are given two **positive** integers `num` and `sum`.

A positive integer `n` is **good** if it satisfies both of the following:

- The number of digits in `n` is **exactly** `num`.
- The sum of digits in `n` is **exactly** `sum`.

The **score** of a **good** integer `n` is the sum of the squares of digits in `n`.

Return a **string** denoting the **good** integer `n` that achieves the **maximum** **score**. If there are multiple possible integers, return the **maximum** one. If no such integer exists, return an empty string.

### Constraints:

- `1 <= num <= 2 * 10^5`
- `1 <= sum <= 2 * 10^6`
