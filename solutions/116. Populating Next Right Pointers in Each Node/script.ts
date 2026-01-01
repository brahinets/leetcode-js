import {_Node as Node} from "../../common/_Node"

export {connect}

function connect(root: Node | null): Node | null {
    if (root === null) {
        return null
    }

    const queue: Node[] = [root]
    while (queue.length > 0) {
        const levelSize: number = queue.length
        let prev: Node | null = null

        for (let i: number = 0; i < levelSize; i++) {
            const node: Node = queue.shift()!

            if (prev !== null) {
                prev.next = node
            }
            prev = node

            if (node.left !== null) {
                queue.push(node.left)
            }

            if (node.right !== null) {
                queue.push(node.right)
            }
        }

        if (prev !== null) {
            prev.next = null
        }
    }

    return root
}
