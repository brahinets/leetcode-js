import {TreeNode} from '../../common/TreeNode'

export {isEvenOddTree, TreeNode}


function isEvenOddTree(root: TreeNode): boolean {
    return check(true, [root])
}

function check(odd: boolean, nodes: TreeNode[]): boolean {
    const next: TreeNode[] = []

    for (let i: number = 0; i < nodes.length; i++) {
        if (odd) {
            if (nodes[i].val % 2 === 0) {
                return false
            }

            if (i > 0 && nodes[i - 1].val >= nodes[i].val) {
                return false
            }
        } else {
            if (nodes[i].val % 2 !== 0) {
                return false
            }

            if (i > 0 && nodes[i - 1].val <= nodes[i].val) {
                return false
            }
        }

        if (nodes[i].left) {
            next.push(nodes[i].left!)
        }

        if (nodes[i].right) {
            next.push(nodes[i].right!)
        }
    }

    if (next.length !== 0) {
        return check(!odd, next)
    }

    return true
}
