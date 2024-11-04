# 3163. String Compression III

## Medium

Given a string `word`, compress it using the following algorithm:

- Begin with an empty string `comp`. While `word` is not empty, use the following operation:
    - Remove a maximum length prefix of `word` made of a single character `c` repeating at most `9` times.
    - Append the length of the prefix followed by `c` to `comp`.

Return the string `comp`.

### Constraints:

- `1 <= word.length <= 2 * 10^5`
- `word` consists only of lowercase English letters.
