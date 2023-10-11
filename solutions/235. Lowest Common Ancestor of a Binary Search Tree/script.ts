import {TreeNode} from "../../common/TreeNode"

export {lowestCommonAncestor, TreeNode}

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    let lca: TreeNode | null = root

    while (lca) {
        if (p.val < lca.val && q.val < lca.val) {
            lca = lca?.left
        } else if (p.val > lca.val && q.val > lca.val) {
            lca = lca?.right
        } else {
            break
        }
    }

    if (!lca) {
        throw new Error("Lowest Common Ancestor not detected")
    }

    return lca
}
