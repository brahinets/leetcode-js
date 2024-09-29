export {AllOne}

class AllOne {
    private readonly map: Map<string, Node>
    private readonly head: Node
    private readonly tail: Node

    constructor() {
        this.map = new Map<string, Node>()
        this.head = new Node("", 0)
        this.tail = new Node("", Infinity)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    private insertAfter(node: Node, newNode: Node): void {
        newNode.prev = node
        newNode.next = node.next
        node.next!.prev = newNode
        node.next = newNode
    }

    private remove(node: Node): void {
        node.prev!.next = node.next
        node.next!.prev = node.prev
    }

    inc(key: string): void {
        if (this.map.has(key)) {
            const node: Node = this.map.get(key)!

            node.count++
            while (node.next!.count < node.count) {
                this.remove(node)
                this.insertAfter(node.next!, node)
            }
        } else {
            const newNode: Node = new Node(key, 1)

            this.map.set(key, newNode)
            this.insertAfter(this.head, newNode)
        }
    }

    dec(key: string): void {
        if (this.map.has(key)) {
            const node: Node = this.map.get(key)!

            node.count--
            if (node.count === 0) {
                this.remove(node)
                this.map.delete(key)
            } else {
                while (node.prev!.count > node.count) {
                    this.remove(node)
                    this.insertAfter(node.prev!.prev!, node)
                }
            }
        }
    }

    getMaxKey(): string {
        return this.tail.prev === this.head ? "" : this.tail.prev!.key
    }

    getMinKey(): string {
        return this.head.next === this.tail ? "" : this.head.next!.key
    }
}

class Node {
    constructor(
        public key: string,
        public count: number,
        public prev: Node | null = null,
        public next: Node | null = null
    ) {
    }
}
