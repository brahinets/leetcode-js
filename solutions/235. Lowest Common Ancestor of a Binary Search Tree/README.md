# 235. Lowest Common Ancestor of a Binary Search Tree

## Medium

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST. According to
the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest
node in T that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).”

### Constraints:

The number of nodes in the tree is in the range `[2, 10^5]`.  
`-10^9 <= Node.val <= 10^9`  
All Node.val are unique. `p != q`, where `p` and `q` will exist in the BST.