# 2901. Longest Unequal Adjacent Groups Subsequence II

## Medium

You are given a string array `words`, and an array `groups`, both arrays having length `n`. The hamming distance between
two strings of equal length is the number of positions at which the corresponding characters are different. You need to
select the longest subsequence from an array of indices `[0, 1, ..., n - 1]`, such that for the subsequence denoted as
`[i0, i1, ..., ik-1]` having length `k`, the following holds: For adjacent indices in the subsequence, their
corresponding groups are unequal, i.e., `groups[ij] != groups[ij+1]`, for each `j` where `0 < j + 1 < k`. `words[ij]`
and `words[ij+1]` are equal in length, and the hamming distance between them is `1`, where `0 < j + 1 < k`, for all
indices in the subsequence. Return a string array containing the words corresponding to the indices (in order) in the
selected subsequence. If there are multiple answers, return any of them. Note: strings in `words` may be unequal in
length.

### Constraints:

- `1 <= n == words.length == groups.length <= 1000`
- `1 <= words[i].length <= 10`
- `1 <= groups[i] <= n`
- `words` consists of distinct strings.
- `words[i]` consists of lowercase English letters.
