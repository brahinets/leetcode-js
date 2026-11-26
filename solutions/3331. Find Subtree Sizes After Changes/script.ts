import { arrayOf, arrayOfZeros } from '../../common/array-factories'

export { findSubtreeSizes }

const LOWERCASE_CHARACTER_COUNT = 26
const FIRST_LOWERCASE_CHARACTER_CODE = 97

function findSubtreeSizes(parent: number[], s: string): number[] {
    const nodeCount: number = parent.length
    const finalParent: number[] = findFinalParents(parent, s)
    const childLists: number[][] = buildChildLists(finalParent, nodeCount)
    const visitOrder: number[] = getPreorderVisitOrder(childLists)
    const subtreeSizes: number[] = arrayOf(1, nodeCount)

    for (
        let orderIndex: number = nodeCount - 1;
        orderIndex >= 0;
        orderIndex--
    ) {
        const node: number = visitOrder[orderIndex]

        if (node !== 0) {
            subtreeSizes[finalParent[node]] += subtreeSizes[node]
        }
    }

    return subtreeSizes
}

function findFinalParents(parent: number[], s: string): number[] {
    const nodeCount: number = parent.length
    const originalChildLists: number[][] = buildChildLists(parent, nodeCount)
    const finalParent: number[] = parent.slice()
    const lastSeenAncestorByCharacter: number[] = arrayOf(
        -1,
        LOWERCASE_CHARACTER_COUNT
    )
    const savedLastSeenAncestor: number[] = arrayOfZeros(nodeCount)
    const nodeStack: number[] = [0]
    const isEnteringStack: boolean[] = [true]

    while (nodeStack.length > 0) {
        const node: number = nodeStack.pop()!
        const isEntering: boolean = isEnteringStack.pop()!
        const characterIndex: number =
            s.charCodeAt(node) - FIRST_LOWERCASE_CHARACTER_CODE

        if (isEntering) {
            const closestSameCharacterAncestor: number =
                lastSeenAncestorByCharacter[characterIndex]
            savedLastSeenAncestor[node] = closestSameCharacterAncestor
            lastSeenAncestorByCharacter[characterIndex] = node

            if (closestSameCharacterAncestor !== -1) {
                finalParent[node] = closestSameCharacterAncestor
            }

            nodeStack.push(node)
            isEnteringStack.push(false)

            const children: number[] = originalChildLists[node]
            for (let index: number = 0; index < children.length; index++) {
                nodeStack.push(children[index])
                isEnteringStack.push(true)
            }
        } else {
            lastSeenAncestorByCharacter[characterIndex] =
                savedLastSeenAncestor[node]
        }
    }

    return finalParent
}

function buildChildLists(parent: number[], nodeCount: number): number[][] {
    const childLists: number[][] = []

    for (let node: number = 0; node < nodeCount; node++) {
        childLists.push([])
    }

    for (let node: number = 1; node < nodeCount; node++) {
        childLists[parent[node]].push(node)
    }

    return childLists
}

function getPreorderVisitOrder(childLists: number[][]): number[] {
    const visitOrder: number[] = []
    const nodeStack: number[] = [0]

    while (nodeStack.length > 0) {
        const node: number = nodeStack.pop()!
        visitOrder.push(node)

        const children: number[] = childLists[node]
        for (let index: number = 0; index < children.length; index++) {
            nodeStack.push(children[index])
        }
    }

    return visitOrder
}
