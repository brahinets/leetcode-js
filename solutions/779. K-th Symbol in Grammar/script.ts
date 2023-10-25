import {TreeNode} from "../../common/TreeNode"

export {TreeNode, kthGrammar}

function kthGrammar(n: number, k: number): number {
    let str: string = "0"

    let i: number = 1
    while (i++ < n) {
        str = str.replace(new RegExp("0", "g"), "0x")
        str = str.replace(new RegExp("1", "g"), "x0")
        str = str.replace(new RegExp("x", "g"), "1")
    }

    return parseInt(str[k - 1])
}
