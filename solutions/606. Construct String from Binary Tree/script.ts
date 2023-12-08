import {TreeNode} from '../../common/TreeNode'

export {tree2str, TreeNode}

function tree2str(root: TreeNode | null): string {
    if (root === null) {
        return ""
    }

    const left: string = tree2str(root.left)
    const right: string = tree2str(root.right)

    if (left === "" && right === "") {
        return `${root.val}`
    }

    if (right === "") {
        return `${root.val}(${left})`
    }

    return `${root.val}(${left})(${right})`
}
