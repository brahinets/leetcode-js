import {TreeNode} from "../../common/TreeNode"

export {recoverFromPreorder}

function recoverFromPreorder(traversal: string): TreeNode | null {
    const stack: TreeNode[] = []
    let index: number = 0

    while (index < traversal.length) {
        let depth: number = 0
        while (index < traversal.length && traversal.charAt(index) === '-') {
            depth++
            index++
        }

        let value: number = 0
        while (index < traversal.length && isDigit(traversal.charAt(index))) {
            value = value * 10 + (traversal.charAt(index).charCodeAt(0) - '0'.charCodeAt(0))
            index++
        }

        const node: TreeNode = new TreeNode(value)
        while (stack.length > depth) {
            stack.pop()
        }

        if (stack.length > 0) {
            const parent: TreeNode = stack[stack.length - 1]

            if (parent.left === null) {
                parent.left = node
            } else {
                parent.right = node
            }
        }

        stack.push(node)
    }

    return stack[0]
}

function isDigit(n: string): boolean {
    return !!n.match(/\d/)
}
