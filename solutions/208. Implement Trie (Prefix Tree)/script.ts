export {Trie}

class TrieNode {
    children: Map<string, TrieNode>
    count: number

    constructor() {
        this.children = new Map()
        this.count = 0
    }
}

class Trie {
    private readonly root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let node: TrieNode = this.root

        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode())
            }

            node = node.children.get(char)!
            node.count += 1
        }
    }

    search(word: string): boolean {
        let node: TrieNode = this.root
        for (const char of word) {
            if (!node.children.has(char)) {
                return false
            }
            node = node.children.get(char)!
        }
        return true
    }

    startsWith(prefix: string): boolean {
        let node: TrieNode = this.root

        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false
            }
            node = node.children.get(char)!
        }

        return true
    }

    getPrefixScore(word: string): number {
        let node: TrieNode = this.root
        let score: number = 0

        for (const char of word) {
            if (!node.children.has(char)) {
                break
            }

            node = node.children.get(char)!
            score += node.count
        }

        return score
    }
}
