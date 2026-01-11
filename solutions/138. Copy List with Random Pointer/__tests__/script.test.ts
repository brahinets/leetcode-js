import { _NodeRandom } from '../../../common/_NodeRandom'
import { copyRandomList } from '../script'

describe('138. Copy List with Random Pointer', (): void => {

    it('Long', (): void => {
        const head: _NodeRandom | null = linkedListWithRandomOf([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]])

        const copied: _NodeRandom | null = copyRandomList(head)

        expect(linkedListWithRandomToArray(copied)).toEqual([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]])
        expect(isDeepCopyWithRandom(head, copied)).toBe(true)
    })

    it('Short', (): void => {
        const head: _NodeRandom | null = linkedListWithRandomOf([[1, 1], [2, 1]])

        const copied: _NodeRandom | null = copyRandomList(head)

        expect(linkedListWithRandomToArray(copied)).toEqual([[1, 1], [2, 1]])
        expect(isDeepCopyWithRandom(head, copied)).toBe(true)
    })

    it('Medium', (): void => {
        const head: _NodeRandom | null = linkedListWithRandomOf([[3, null], [3, 0], [3, null]])

        const copied: _NodeRandom | null = copyRandomList(head)

        expect(linkedListWithRandomToArray(copied)).toEqual([[3, null], [3, 0], [3, null]])
        expect(isDeepCopyWithRandom(head, copied)).toBe(true)
    })

    it('Empty list', (): void => {
        const head: _NodeRandom | null = linkedListWithRandomOf([])
        
        const copied: _NodeRandom | null = copyRandomList(head)

        expect(copied).toBeNull()
    })

})


function linkedListWithRandomOf(arr: Array<[number, number | null]>): _NodeRandom | null {
    if (arr.length === 0) {
        return null
    }

    const nodes: _NodeRandom[] = []
    for (const [val] of arr) {
        nodes.push(new _NodeRandom(val))
    }

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1]
    }

    for (let i: number = 0; i < arr.length; i++) {
        const randomIndex: number | null = arr[i][1]
        if (randomIndex !== null) {
            nodes[i].random = nodes[randomIndex]
        }
    }

    return nodes[0]
}

function linkedListWithRandomToArray(head: _NodeRandom | null): Array<[number, number | null]> {
    if (!head) {
        return []
    }

    const result: Array<[number, number | null]> = []
    const nodeToIndex: Map<_NodeRandom, number> = new Map<_NodeRandom, number>()

    let current: _NodeRandom | null = head
    let index: number = 0
    while (current) {
        nodeToIndex.set(current, index)

        index++

        current = current.next
    }

    current = head
    while (current) {
        const randomIndex: number | null = current.random ? nodeToIndex.get(current.random)! : null

        result.push([current.val, randomIndex])

        current = current.next
    }

    return result
}

function isDeepCopyWithRandom(original: _NodeRandom | null, copy: _NodeRandom | null): boolean {
    if (!original || !copy) {
        return original === copy
    }

    const originalNodes: Set<_NodeRandom> = new Set<_NodeRandom>()
    let current: _NodeRandom | null = original
    while (current) {
        originalNodes.add(current)

        current = current.next
    }

    current = copy
    while (current) {
        if (originalNodes.has(current)) {
            return false
        }

        current = current.next
    }

    return true
}
