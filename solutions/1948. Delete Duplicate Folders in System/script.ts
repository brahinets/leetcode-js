export {deleteDuplicateFolder}

class Trie {
    serial: string = ""
    children: Map<string, Trie> = new Map<string, Trie>()
}

function deleteDuplicateFolder(paths: string[][]): string[][] {
    const root: Trie = new Trie()

    for (const path of paths) {
        let currentNode: Trie = root

        for (const folderName of path) {
            if (!currentNode.children.has(folderName)) {
                currentNode.children.set(folderName, new Trie())
            }
            currentNode = currentNode.children.get(folderName)!
        }
    }

    const serialCount: Map<string, number> = new Map<string, number>()
    serializeTrie(root, serialCount)

    const result: string[][] = []
    const currentPath: string[] = []
    collectUniquePaths(root, serialCount, currentPath, result)

    return result
}

function serializeTrie(node: Trie, serialCount: Map<string, number>): void {
    if (node.children.size === 0) {
        return
    }

    const childSerials: string[] = []
    for (const [folderName, childNode] of node.children) {
        serializeTrie(childNode, serialCount)
        childSerials.push(`${folderName}(${childNode.serial})`)
    }

    childSerials.sort()
    node.serial = childSerials.join("")
    serialCount.set(node.serial, (serialCount.get(node.serial) || 0) + 1)
}

function collectUniquePaths(
    node: Trie,
    serialCount: Map<string, number>,
    currentPath: string[],
    result: string[][]
): void {
    if ((serialCount.get(node.serial) || 0) > 1) {
        return
    }

    if (currentPath.length > 0) {
        result.push([...currentPath])
    }

    for (const [folderName, childNode] of node.children) {
        currentPath.push(folderName)
        collectUniquePaths(childNode, serialCount, currentPath, result)
        currentPath.pop()
    }
}
