import {TreeNode} from "../../common/TreeNode"

export {TreeNode, kthGrammar}

function kthGrammar(n: number, k: number): number {
    if (n === 1) {
        return 0
    }

    const total: number = 2 ** (n - 1)
    const half: number = Math.round(total / 2)

    if (k > half) {
        return 1 - kthGrammar(n - 1, k - half)
    } else {
        return kthGrammar(n - 1, k)
    }
}
