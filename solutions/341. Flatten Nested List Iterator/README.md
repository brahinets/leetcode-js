# 341. Flatten Nested List Iterator

## Medium

You are given a nested list of integers `nestedList`. Each element is either an integer or a list whose elements may
also be integers or other lists. Implement an iterator to flatten it.

Implement the `NestedIterator` class:

- `NestedIterator(List<NestedInteger> nestedList)` Initializes the iterator with the nested list `nestedList`.
- `int next()` Returns the next integer in the nested list.
- `boolean hasNext()` Returns `true` if there are still some integers in the nested list and `false` otherwise.

### Constraints:

- `1 <= nestedList.length <= 500`
- The values of the integers in the nested list is in the range `[-10^6, 10^6]`.
