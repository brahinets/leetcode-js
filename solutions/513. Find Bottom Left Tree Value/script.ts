export {findBottomLeftValue, TreeNode}
import {TreeNode} from '../../common/TreeNode'

function findBottomLeftValue(root: TreeNode): number {
    const queue: TreeNode[] = [root]

    let node: TreeNode = root
    while (queue.length > 0) {
        node = queue.shift()!

        if (node.right) {
            queue.push(node.right)
        }

        if (node.left) {
            queue.push(node.left)
        }
    }

    return node.val
}
