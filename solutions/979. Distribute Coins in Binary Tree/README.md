# 979. Distribute Coins in Binary Tree

## Medium

You are given the `root` of a binary tree with `n` nodes where each `node` in the tree has `node.val` coins. There
are `n` coins in total throughout the whole tree. In one move, we may choose two adjacent nodes and move one coin from
one node to another. A move may be from parent to child, or from child to parent. Return the minimum number of moves
required to make every node have exactly one coin.

### Constraints:

- The number of nodes in the tree is `n`.
- `1 <= n <= 100`
- `0 <= Node.val <= n`
- The sum of all `Node.val` is `n`.
