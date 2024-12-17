# 2182. Construct String With Repeat Limit

## Medium

You are given a string `s` and an integer `repeatLimit`. Construct a new string `repeatLimitedString` using the
characters of `s` such that no letter appears more than `repeatLimit` times in a row. You do not have to use all
characters from `s`. Return the lexicographically largest repeatLimitedString possible. A string `a` is
lexicographically larger than a string `b` if in the first position where `a` and `b` differ, string `a` has a letter
that appears later in the alphabet than the corresponding letter in `b`. If the first `min(a.length, b.length)`
characters do not differ, then the longer string is the lexicographically larger one.

### Constraints:

- `1 <= repeatLimit <= s.length <= 10^5`
- `s consists of lowercase English letters.`
