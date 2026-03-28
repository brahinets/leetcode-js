# 2573. Find the String with LCP

## Hard

The `lcp` matrix of a 0-indexed string `word` of `n` lowercase letters is an `n x n` grid where `lcp[i][j]` is the length of the longest common prefix between `word[i..n-1]` and `word[j..n-1]`.

Given an `n x n` matrix `lcp`, return the alphabetically smallest string `word` that corresponds to `lcp`. If no such string exists, return an empty string.

### Constraints:

- `1 <= n <= 1000`
- `0 <= lcp[i][j] <= n`
