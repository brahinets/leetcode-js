export {Trie}

class Trie {
    private readonly data: Map<string, number>

    constructor() {
        this.data = new Map<string, number>()
    }

    insert(word: string): void {
        if (!word) {
            throw new Error("Illegal word: " + word)
        }

        for (let i = 1; i <= word.length; i++) {
            const prefix = word.slice(0, i)
            this.data.set(prefix, (this.data.get(prefix) || 0) + 1)
        }
    }

    search(word: string): boolean {
        return this.data.has(word)
    }

    startsWith(prefix: string): boolean {
        return this.data.has(prefix)
    }

    getPrefixCount(prefix: string): number {
        return this.data.get(prefix) || 0
    }
}
