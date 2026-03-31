# 3474. Lexicographically Smallest Generated String

## Hard

Given two strings `str1` and `str2` of lengths `n` and `m` respectively, a string `word` of length `n + m - 1` is **generated** if for each index `0 <= i <= n - 1`:

- If `str1[i] == 'T'`: the substring `word[i..(i + m - 1)]` must equal `str2`
- If `str1[i] == 'F'`: the substring `word[i..(i + m - 1)]` must **not** equal `str2`

Return the **lexicographically smallest** possible generated string, or an empty string if no valid string exists.

### Constraints:

- `1 <= n == str1.length <= 10^4`
- `1 <= m == str2.length <= 500`
- `str1` consists only of `'T'` or `'F'`
- `str2` consists only of lowercase English letters
