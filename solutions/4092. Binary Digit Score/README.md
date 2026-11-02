# 4092. Binary Digit Score

## Easy

You are given two integers `a` and `b`.

Let `s1` and `s2` be the number of set bits in the binary representations of `a` and `b`, respectively.

The **score** of these integers is defined as follows:

- If `s1 >= s2`, the score is `s1 * s2`.
- Otherwise, the score is `s2 / s1` using **integer division**.

Return an integer representing the score of `a` and `b`.

**Constraints:**

- `1 <= a, b <= 100`
