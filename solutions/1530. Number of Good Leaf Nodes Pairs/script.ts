import {TreeNode} from "../../common/TreeNode"

export {TreeNode, countPairs}

function countPairs(root: TreeNode | null, distance: number): number {
    let result: number = 0

    function getPairs(node: TreeNode | null): number[] {
        if(!node) {
            return []
        }

        const left: number[] = getPairs(node.left)
        const right: number[] = getPairs(node.right)

        for(const node of left){
            result += right.filter(rDist => rDist + node <= distance).length
        }

        if(!node.left && !node.right) {
            return [1]
        }

        return [...left,...right].map(h => h + 1)
    }

    getPairs(root)

    return result
}
