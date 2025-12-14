import {TreeNode} from "../../common/TreeNode"

export {recoverTree}

function recoverTree(root: TreeNode | null): void {
    const nodes: TreeNode[] = []
    inorderTraversal(root, nodes)

    let first: TreeNode | null = null
    let second: TreeNode | null = null

    for (let i: number = 0; i < nodes.length - 1; i++) {
        if (nodes[i].val > nodes[i + 1].val) {
            if (!first) {
                first = nodes[i]
            }
            second = nodes[i + 1]
        }
    }

    if (first && second) {
        const temp: number = first.val
        first.val = second.val
        second.val = temp
    }
}

function inorderTraversal(node: TreeNode | null, nodes: TreeNode[]): void {
    if (node !== null) {
        inorderTraversal(node.left, nodes)

        nodes.push(node)

        inorderTraversal(node.right, nodes)
    }
}
