# 2559. Count Vowel Strings in Ranges

## Medium

You are given a 0-indexed array of strings `words` and a 2D array of integers queries. Each query
`queries[i] = [li, ri]` asks us to find the number of strings present in the range `li` to `ri` (both inclusive) of
`words` that start and end with a vowel. Return an array `ans` of size `queries.length`, where `ans[i]` is the answer to
the `ith` query. Note that the vowel letters are `a`, `e`, `i`, `o`, and `u`.

### Constraints:

- `1 <= words.length <= 10^5`
- `1 <= words[i].length <= 40`
- `words[i]` consists only of lowercase English letters.
- `sum(words[i].length) <= 3 * 10^5`
- `1 <= queries.length <= 10^5`
- `0 <= li <= ri < words.length`
