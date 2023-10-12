# 946. Validate Stack Sequences

## Medium

Given two integer arrays `pushed` and `popped` each with distinct values, return `true` if this could have been the
result of a sequence of push and pop operations on an initially empty stack, or `false` otherwise.

### Constraints:

- `1 <= pushed.length <= 1000`
- `0 <= pushed[i] <= 1000`
- All the elements of pushed are unique.
- `popped.length == pushed.length`
- `popped` is a permutation of pushed.
