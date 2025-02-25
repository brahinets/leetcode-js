import {TreeNode} from "../../common/TreeNode"

export {createBinaryTree}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const {nodes, children} = collectNodes(descriptions)

    for (const node of nodes.values()) {
        if (!children.has(node.val)) {
            return node
        }
    }

    return null
}

function collectNodes(descriptions: number[][]): { nodes: Map<number, TreeNode>, children: Set<number> } {
    const nodes: Map<number, TreeNode> = new Map()
    const children = new Set<number>()

    for (const [parentValue, childValue, isLeft] of descriptions) {
        const parent: TreeNode = nodes.get(parentValue) || new TreeNode(parentValue)
        const child: TreeNode = nodes.get(childValue) || new TreeNode(childValue)

        if (isLeft) {
            parent.left = child
        } else {
            parent.right = child
        }

        nodes.set(parentValue, parent)
        nodes.set(childValue, child)

        children.add(childValue)
    }

    return {nodes, children}
}
