import { _NodeRandom as _Node} from '../../common/_NodeRandom'

export { copyRandomList }

function copyRandomList(head: _Node | null): _Node | null {
    if (!head) {
        return null
    }

    let current: _Node | null = head
    while (current) {
        const newNode: _Node = new _Node(current.val)

        newNode.next = current.next
        current.next = newNode
        current = newNode.next
    }

    current = head
    while (current) {
        if (current.random) {
            current.next!.random = current.random.next
        }

        current = current.next!.next
    }

    const dummyHead: _Node = new _Node(0)
    let copyCurrent: _Node = dummyHead
    current = head

    while (current) {
        const copyNode: _Node = current.next!
        copyCurrent.next = copyNode
        copyCurrent = copyNode

        current.next = copyNode.next
        current = current.next
    }

    return dummyHead.next
}
