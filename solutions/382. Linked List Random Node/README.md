# 382. Linked List Random Node

## Medium

Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability
of being chosen. Implement the Solution class: `Solution(ListNode head)` Initializes the object with the head of the
singly-linked list head. `int getRandom()` Chooses a node randomly from the list and returns its value. All the nodes of
the list should be equally likely to be chosen.

### Constraints:

The number of nodes in the linked list will be in the range `[1, 10^4]`.
`-10^4 <= Node.val <= 10^4`
At most 104 calls will be made to `getRandom`.

**Follow up:**
What if the linked list is extremely large and its length is unknown to you?
Could you solve this efficiently without using extra space?
