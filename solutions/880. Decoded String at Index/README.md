# 880. Decoded String at Index

## Medium

You are given an encoded string `s`. To decode the string to a tape, the encoded string is read one character at a time
and the following steps are taken: If the character read is a letter, that letter is written onto the tape. If the
character read is a digit `d`, the entire current tape is repeatedly written `d - 1` more times in total. Given an
integer `k`, return the kth letter (1-indexed) in the decoded string.

### Constraints:

- `2 <= s.length <= 100`
- `s` consists of lowercase English letters and digits `2` through `9`.
- `s` starts with a letter.
- `1 <= k <= 10^9`
- It is guaranteed that `k` is less than or equal to the length of the decoded string.
- The decoded string is guaranteed to have less than `2^63` letters.
