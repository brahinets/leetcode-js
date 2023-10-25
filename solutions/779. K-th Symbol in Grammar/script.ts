import {TreeNode} from "../../common/TreeNode"

export {TreeNode, kthGrammar}

function kthGrammar(n: number, k: number): number {
    let str: string = "0"

    const first: RegExp = new RegExp("0", "g");
    const second: RegExp = new RegExp("1", "g");
    const third: RegExp = new RegExp("x", "g")

    let i: number = 1
    while (i++ < n) {
        str = str.replace(first, "0x")
        str = str.replace(second, "x0")
        str = str.replace(third, "1")
    }

    return parseInt(str[k - 1])
}
