# 2433. Find The Original Array of Prefix Xor

## Medium

You are given an integer array `pref` of size `n`. Find and return the array `arr` of size `n` that satisfies:
`pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]`. Note that `^` denotes the bitwise-xor operation. It can be proven that the
answer is unique.

### Constraints:

- `1 <= pref.length <= 10^5`
- `0 <= pref[i] <= 10^6`
