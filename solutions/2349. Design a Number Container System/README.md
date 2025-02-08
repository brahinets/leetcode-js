# 2349. Design a Number Container System

## Medium

Design a number container system that can do the following: Insert or Replace a number at the given index in the system.
Return the smallest index for the given number in the system. Implement the `NumberContainers` class:

- `NumberContainers()` Initializes the number container system.
- `void change(int index, int number)` Fills the container at `index` with the `number`. If there is already a number at
  that `index`, replace it.
- `int find(int number)` Returns the smallest `index` for the given `number`, or `-1` if there is no index that is
  filled by `number` in the system.

### Constraints:

- `1 <= index, number <= 10^9`
- At most `10^5` calls will be made in total to change and find.
