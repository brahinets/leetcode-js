import {Trie} from "../208. Implement Trie (Prefix Tree)/script"

export {sumPrefixScores}

function sumPrefixScores(words: string[]): number[] {
    const trie: Trie = new Trie()
    const prefixCount: Map<string, number> = new Map()

    for (const word of words) {
        trie.insert(word)

        for (let i = 1; i <= word.length; i++) {
            const prefix = word.slice(0, i)
            prefixCount.set(prefix, (prefixCount.get(prefix) || 0) + 1)
        }
    }

    return words.map(word => {
        let score: number = 0
        for (let i: number = 1; i <= word.length; i++) {
            const prefix: string = word.slice(0, i)
            score += prefixCount.get(prefix) || 0
        }

        return score
    })
}
