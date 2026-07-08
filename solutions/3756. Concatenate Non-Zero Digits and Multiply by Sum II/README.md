# Concatenate Non-Zero Digits and Multiply by Sum II

## Medium

You are given a string `s` of length `m` consisting of digits. You are also given a 2D integer array `queries`, where `queries[i] = [li, ri]`.

For each `queries[i]`, extract the substring `s[li..ri]`. Then, perform the following:

- Form a new integer `x` by concatenating all the non-zero digits from the substring in their original order. If there are no non-zero digits, `x = 0`.
- Let `sum` be the sum of digits in `x`. The answer is `x * sum`.

Return an array of integers `answer` where `answer[i]` is the answer to the `i`th query.

Since the answers may be very large, return them modulo `10^9 + 7`.

Constraints:

- `1 <= m == s.length <= 10^5`
- `s` consists of digits only.
- `1 <= queries.length <= 10^5`
- `queries[i] = [li, ri]`
- `0 <= li <= ri < m`
