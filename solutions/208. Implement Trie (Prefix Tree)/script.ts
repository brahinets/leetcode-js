export {Trie}

class Trie {
    private readonly data: Set<string>

    constructor() {
        this.data = new Set<string>()
    }

    insert(word: string): void {
        if (!word) {
            throw new Error("Illegal word: " + word)
        }

        this.data.add(word)
    }

    search(word: string): boolean {
        return this.data.has(word)
    }

    startsWith(prefix: string): boolean {
        return this.startPrefix(prefix) > 0
    }

    startPrefix(prefix: string): number {
        let count: number = 0

        for (const str of this.data) {
            if (str.startsWith(prefix)) {
                count += 1
            }
        }

        return count
    }
}
