import {TreeNode} from "../../common/TreeNode"

export {FindElements}

class FindElements {
    private readonly seen: Set<number>

    constructor(root: TreeNode | null) {
        this.seen = new Set<number>()
        this.dfs(root, 0)
    }

    find(target: number): boolean {
        return this.seen.has(target)
    }

    private dfs(currentNode: TreeNode | null, currentValue: number): void {
        if (currentNode == null) {
            return
        }
        this.seen.add(currentValue)

        this.dfs(currentNode.left, currentValue * 2 + 1)
        this.dfs(currentNode.right, currentValue * 2 + 2)
    }
}
