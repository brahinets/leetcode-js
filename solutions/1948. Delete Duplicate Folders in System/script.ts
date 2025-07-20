export {deleteDuplicateFolder}

class Trie {
    serial: string = ""
    children: Map<string, Trie> = new Map<string, Trie>()
}

function deleteDuplicateFolder(paths: string[][]): string[][] {
    const root = new Trie()


    for (const path of paths) {
        let current: Trie = root

        for (const node of path) {
            if (!current.children.has(node)) {
                current.children.set(node, new Trie())

            }
            current = current.children.get(node)!

        }
    }

    const counts = new Map<string, number>()

    function construct(node: Trie):void {
        if (node.children.size === 0) {
            return
        }

        const v: string[] = []
        for (const [folder, child] of node.children) {
            construct(child)

            v.push(`${folder}(${child.serial})`)

        }

        v.sort()

        node.serial = v.join("")

        counts.set(node.serial, (counts.get(node.serial) || 0) + 1)
    }

    construct(root)

    const ans: string[][] = []
    const path: string[] = []

    function operate(node: Trie): void {
        if ((counts.get(node.serial) || 0) > 1) {
            return
        }

        if (path.length > 0) {
            ans.push([...path])

        }

        for (const [folder, child] of node.children) {
            path.push(folder)

            operate(child)

            path.pop()

        }
    }

    operate(root)

    return ans
}
