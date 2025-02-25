# 725. Split Linked List in Parts

## Medium

Given the `head` of a singly linked list and an integer `k`, split the linked list into `k` consecutive linked list
parts. The length of each part should be as equal as possible: no two parts should have a size differing by more than
one. This may lead to some parts being null. The parts should be in the order of occurrence in the input list, and parts
occurring earlier should always have a size greater than or equal to parts occurring later. Return an array of the `k`
parts.

### Constraints:

- The number of nodes in the list is in the range `[0, 1000]`
- `0 <= Node.val <= 1000`
- `1 <= k <= 50`
