import {arrayOf, arrayOfZeros} from '../../common/array-factories'

export {longestRepeating}

interface SegmentTreeNode {
    length: number
    leftCharacter: string
    leftRunLength: number
    rightCharacter: string
    rightRunLength: number
    maxRunLength: number
}

function longestRepeating(inputString: string, queryCharacters: string, queryIndices: number[]): number[] {
    const characters: string[] = inputString.split('')
    const treeSize: number = characters.length
    const segmentTree: SegmentTreeNode[] = arrayOf<SegmentTreeNode>(createEmptyNode(), 4 * treeSize)

    buildSegmentTree(segmentTree, characters, 1, 0, treeSize - 1)

    const lengths: number[] = arrayOfZeros(queryCharacters.length)

    for (let queryIndex: number = 0; queryIndex < queryCharacters.length; queryIndex++) {
        characters[queryIndices[queryIndex]] = queryCharacters[queryIndex]
        updateSegmentTree(segmentTree, characters, 1, 0, treeSize - 1, queryIndices[queryIndex])
        lengths[queryIndex] = segmentTree[1].maxRunLength
    }

    return lengths
}

function createEmptyNode(): SegmentTreeNode {
    return {
        length: 0,
        leftCharacter: '',
        leftRunLength: 0,
        rightCharacter: '',
        rightRunLength: 0,
        maxRunLength: 0
    }
}

function buildSegmentTree(
    segmentTree: SegmentTreeNode[],
    characters: readonly string[],
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number
): void {
    if (segmentStart === segmentEnd) {
        segmentTree[nodeIndex] = createLeafNode(characters[segmentStart])
        return
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)
    buildSegmentTree(segmentTree, characters, nodeIndex * 2, segmentStart, segmentMiddle)
    buildSegmentTree(segmentTree, characters, nodeIndex * 2 + 1, segmentMiddle + 1, segmentEnd)

    segmentTree[nodeIndex] = mergeNodes(segmentTree[nodeIndex * 2], segmentTree[nodeIndex * 2 + 1])
}

function createLeafNode(character: string): SegmentTreeNode {
    return {
        length: 1,
        leftCharacter: character,
        leftRunLength: 1,
        rightCharacter: character,
        rightRunLength: 1,
        maxRunLength: 1
    }
}

function mergeNodes(leftNode: SegmentTreeNode, rightNode: SegmentTreeNode): SegmentTreeNode {
    const mergedNode: SegmentTreeNode = {
        length: leftNode.length + rightNode.length,
        leftCharacter: leftNode.leftCharacter,
        leftRunLength: leftNode.leftRunLength,
        rightCharacter: rightNode.rightCharacter,
        rightRunLength: rightNode.rightRunLength,
        maxRunLength: Math.max(leftNode.maxRunLength, rightNode.maxRunLength)
    }

    if (leftNode.leftRunLength === leftNode.length && leftNode.leftCharacter === rightNode.leftCharacter) {
        mergedNode.leftRunLength = leftNode.length + rightNode.leftRunLength
    }

    if (rightNode.rightRunLength === rightNode.length && rightNode.rightCharacter === leftNode.rightCharacter) {
        mergedNode.rightRunLength = rightNode.length + leftNode.rightRunLength
    }

    if (leftNode.rightCharacter === rightNode.leftCharacter) {
        mergedNode.maxRunLength = Math.max(
            mergedNode.maxRunLength,
            leftNode.rightRunLength + rightNode.leftRunLength
        )
    }

    return mergedNode
}

function updateSegmentTree(
    segmentTree: SegmentTreeNode[],
    characters: readonly string[],
    nodeIndex: number,
    segmentStart: number,
    segmentEnd: number,
    targetIndex: number
): void {
    if (segmentStart === segmentEnd) {
        segmentTree[nodeIndex] = createLeafNode(characters[segmentStart])
        return
    }

    const segmentMiddle: number = Math.floor((segmentStart + segmentEnd) / 2)

    if (targetIndex <= segmentMiddle) {
        updateSegmentTree(segmentTree, characters, nodeIndex * 2, segmentStart, segmentMiddle, targetIndex)
    } else {
        updateSegmentTree(segmentTree, characters, nodeIndex * 2 + 1, segmentMiddle + 1, segmentEnd, targetIndex)
    }

    segmentTree[nodeIndex] = mergeNodes(segmentTree[nodeIndex * 2], segmentTree[nodeIndex * 2 + 1])
}
