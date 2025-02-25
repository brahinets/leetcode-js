# 1028. Recover a Tree From Preorder Traversal

## Hard

We run a preorder depth-first search (DFS) on the root of a binary tree. At each node in this traversal, we output `D`
dashes (where `D` is the depth of this node), then we output the value of this node. If the depth of a node is `D`, the
depth of its immediate child is `D + 1`. The depth of the `root` node is `0`. If a node has only one child, that child
is guaranteed to be the left child. Given the output `traversal` of this traversal, recover the tree and return its
`root`.

### Constraints:

- The number of nodes in the original tree is in the range `[1, 1000]`.
- `1 <= Node.val <= 10^9`
