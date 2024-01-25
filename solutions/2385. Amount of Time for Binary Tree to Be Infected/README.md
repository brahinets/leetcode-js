# 2385. Amount of Time for Binary Tree to Be Infected

## Medium

You are given the `root` of a binary tree with unique values, and an integer `start`. At minute `0`, an infection starts
from the node with value `start`. Each minute, a node becomes infected if:

- The node is currently uninfected.
- The node is adjacent to an infected node.

Return the number of minutes needed for the entire tree to be infected.

### Constraints:

- The number of nodes in the tree is in the range `[1, 10^5]`.
- `1 <= Node.val <= 10^5`
- Each node has a unique value.
- A node with a value of start exists in the tree.
