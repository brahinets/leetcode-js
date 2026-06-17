# 3614. Process String with Special Operations II

## Hard

You are given a string `s` consisting of lowercase English letters and the special characters: `'*'`, `'#'`, and `'%'`, and an integer `k`.

Build a new string `result` by processing `s` according to the following rules from **left to right**:

- If the character is a **lowercase English letter**, append it to `result`.
- `'*'` removes the **last** character from `result`, if it exists.
- `'#'` **duplicates** the current `result` and appends it to itself.
- `'%'` **reverses** the current `result`.

Return the `k`th character (0-indexed) of the final string `result`. If `k` is out of bounds of `result`, return `'.'`.

**Constraints:**

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters and the characters `'*'`, `'#'`, and `'%'`
- `0 <= k <= 10^15`
- The length of `result` after processing `s` will not exceed `10^15`
