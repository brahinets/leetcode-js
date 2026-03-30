# 2840. Check if Strings Can be Made Equal With Operations II

## Medium

You are given two strings `s1` and `s2`, both of length `n`, consisting of lowercase English letters.

Return `true` if you can make the strings `s1` and `s2` equal, and `false` otherwise.

You can apply the following operation on **either** of the two strings **any number of times**:
- Choose any two indices `i` and `j` such that `i < j` and `j - i` is **even**, then swap the two characters at those indices in the string.

### Constraints:

- `1 <= s1.length <= 10^5`
- `s1.length == s2.length`
- `s1` and `s2` consist only of lowercase English letters.
