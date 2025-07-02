# 3333. Find the Original Typed String II

## Hard

Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for
too long, resulting in a character being typed multiple times. You are given a string `word`, which represents the final
output displayed on Alice's screen. You are also given a positive integer `k`. Return the total number of possible
original strings that Alice might have intended to type, if she was trying to type a string of size at least `k`. Since
the answer may be very large, return it modulo `10^9 + 7`.

### Constraints:

– `1 <= word.length <= 5 * 10^5`
– `word` consists only of lowercase English letters.
– `1 <= k <= 2000`
