# 1813. Sentence Similarity III

## Medium

You are given two strings `sentence1` and `sentence2`, each representing a sentence composed of words. A sentence is a
list of words that are separated by a single space with no leading or trailing spaces. Each word consists of only
uppercase and lowercase English characters. Two sentences `s1` and `s2` are considered similar if it is possible to
insert an arbitrary sentence (possibly empty) inside one of these sentences such that the two sentences become equal.
Note that the inserted sentence must be separated from existing words by spaces. Given two sentences `sentence1` and
`sentence2`, return `true` if `sentence1` and `sentence2` are similar. Otherwise, return `false`.

### Constraints:

– `1 <= sentence1.length, sentence2.length <= 100`
– `sentence1` and `sentence2` consist of lowercase and uppercase English letters and spaces.
– The words in `sentence1` and `sentence2` are separated by a single space.
