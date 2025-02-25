# 889. Construct Binary Tree from Preorder and Postorder Traversal

## Medium

Given two integer arrays, `preorder` and `postorder` where 'preorder' is the preorder traversal of a binary tree of
distinct values and 'postorder' is the postorder traversal of the same tree, reconstruct and return the binary tree. If
there exist multiple answers, you can return any of them.

### Constraints:

- `1 <= preorder.length <= 30`
- `1 <= preorder[i] <= preorder.length`
- All the values of `preorder` are unique.
- `postorder.length == preorder.length`
- `1 <= postorder[i] <= postorder.length`
- All the values of `postorder` are unique.
- It is guaranteed that `preorder` and `postorder` are the preorder traversal and postorder traversal of the same binary
  tree.
