# 3093. Longest Common Suffix Queries

## Hard

You are given two arrays of strings `wordsContainer` and `wordsQuery`.

For each `wordsQuery[i]`, you need to find a string from `wordsContainer` that has the **longest common suffix** with `wordsQuery[i]`. If there are two or more strings in `wordsContainer` that share the longest common suffix, find the string that is the **smallest** in length. If there are two or more such strings that have the same smallest length, find the one that occurred **earlier** in `wordsContainer`.

Return an array of integers `ans`, where `ans[i]` is the index of the string in `wordsContainer` that has the **longest common suffix** with `wordsQuery[i]`.

### Constraints:

- `1 <= wordsContainer.length, wordsQuery.length <= 10^4`
- `1 <= wordsContainer[i].length <= 5 * 10^3`
- `1 <= wordsQuery[i].length <= 5 * 10^3`
- `wordsContainer[i]` consists only of lowercase English letters.
- `wordsQuery[i]` consists only of lowercase English letters.
- Sum of `wordsContainer[i].length` is at most `5 * 10^5`.
- Sum of `wordsQuery[i].length` is at most `5 * 10^5`.
