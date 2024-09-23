# 2707. Extra Characters in a String

## Medium

You are given a 0-indexed string `s` and a dictionary of words `dictionary`. You have to break `s` into one or more
non-overlapping substrings such that each substring is present in `dictionary`. There may be some extra characters in
`s` which are not present in any of the substrings. Return the minimum number of extra characters left over if you break
up `s` optimally.

### Constraints:

- `1 <= s.length <= 50`
- `1 <= dictionary.length <= 50`
- `1 <= dictionary[i].length <= 50`
- `dictionary[i]` and `s` consists of only lowercase English letters
- `dictionary` contains distinct words
