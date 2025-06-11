# 3445. Maximum Difference Between Even and Odd Frequency II

## Hard

You are given a string `s` and an integer `k`. Your task is to find the maximum difference between the frequency of two characters, `freq[a] - freq[b]`, in a substring subs of `s`, such that:

- `subs` has a size of at least `k`.
- Character `a` has an odd frequency in `subs`.
- Character `b` has an even frequency in `subs`.
- Return the maximum difference.

Note that subs can contain more than `2` distinct characters.

### Constraints:

- `3 <= s.length <= 3 * 10^4`
- `s` consists only of digits `0` to `4`.
- The input is generated that at least one substring has a character with an even frequency and a character with an odd frequency.
- `1 <= k <= s.length`
