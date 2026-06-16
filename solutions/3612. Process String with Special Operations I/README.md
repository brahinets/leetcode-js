# Process String with Special Operations I

## Medium

You are given a string `s` consisting of lowercase English letters and the special characters `*`, `#`, and `%`.

Build a new string `result` by processing `s` according to the following rules from left to right:

- If the character is a **lowercase English letter**, append it to `result`.
- A `*` **removes** the last character from `result`, if it exists.
- A `#` **duplicates** the current `result` and appends it to itself.
- A `%` **reverses** the current `result`.

Return the final string `result` after processing all characters in `s`.

## Constraints

- `1 <= s.length <= 20`
- `s` consists of only lowercase English letters and special characters `*`, `#`, and `%`.
