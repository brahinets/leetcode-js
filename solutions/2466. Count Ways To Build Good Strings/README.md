# 2466. Count Ways To Build Good Strings

## Medium

Given the integers `zero`, `one`, `low`, and `high`, we can construct a string by starting with an empty string, and
then at each step perform either of the following: Append the character `0` `zero` times. Append the character `1` `one`
times. This can be performed any number of times. A good string is a string constructed by the above process having a
length between `low` and `high` (inclusive). Return the number of different good strings that can be constructed
satisfying these properties. Since the answer can be large, return it modulo `10^9 + 7`.

### Constraints:

- `1 <= low <= high <= 10^5`
- `1 <= zero, one <= low`
