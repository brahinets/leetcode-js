# 160. Intersection of Two Linked Lists

## Easy

Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect.
If the two linked lists have no intersection at all, return `null`.

### Constraints:

- The number of nodes of `listA` is in the `m`.
- The number of nodes of `listB` is in the `n`.
- `1 <= m, n <= 3 * 10^4`
- `1 <= Node.val <= 10^5`
- `0 <= skipA <= m`
- `0 <= skipB <= n`
- `skipA == m` and `skipB == n` if `listA` and `listB` do not intersect.
- `listA` and `listB` intersect if there is some index `i` and `j` such that `listA[i]` and `listB[j]` are the same node.

### Follow-up:

Could you write a solution that runs in `O(m + n)` time and use only `O(1)` memory?
