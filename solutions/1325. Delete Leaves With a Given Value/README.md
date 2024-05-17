# 1325. Delete Leaves With a Given Value

## Medium

Given a binary tree `root` and an integer `target`, delete all the leaf nodes with value `target`. Note that once you
delete a leaf node with value `target`, if its parent node becomes a leaf node and has the value `target`, it should
also be deleted (you need to continue doing that until you cannot).

### Constraints:

- The number of nodes in the tree is in the range `[1, 3000]`.
- `1 <= Node.val, target <= 1000`
