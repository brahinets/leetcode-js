import {Trie} from "../208. Implement Trie (Prefix Tree)/script"

export {sumPrefixScores}

function sumPrefixScores(words: string[]): number[] {
    const trie: Trie = new Trie()
    for (const word of words) {
        trie.insert(word)
    }

    return words.map(word => {
        let score: number = 0
        for (let i: number = 1; i <= word.length; i++) {
            const prefix: string = word.slice(0, i)
            score += trie.startPrefix(prefix)
        }

        return score
    })
}
