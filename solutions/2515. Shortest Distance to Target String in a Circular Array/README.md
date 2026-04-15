# 2515. Shortest Distance to Target String in a Circular Array

## Easy

You are given a **0-indexed** circular string array `words` and a string `target`. A **circular array** means that the array's end connects to the array's beginning.

- Formally, the next element of `words[i]` is `words[(i + 1) % n]` and the previous element of `words[i]` is `words[(i - 1 + n) % n]`, where `n` is the length of `words`.

Starting from `startIndex`, you can move to either the next word or the previous word with `1` step at a time.

Return the **shortest** distance needed to reach any occurrence of `target` in `words`, or `-1` if `target` is not in `words`.

### Constraints:

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` and `target` consist only of English letters.
- `0 <= startIndex < words.length`
