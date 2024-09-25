import {Trie} from "../208. Implement Trie (Prefix Tree)/script"

export {sumPrefixScores}

function sumPrefixScores(words: string[]): number[] {
    const trie: Trie = new Trie()
    for (const word of words) {
        trie.insert(word)
    }

    return words.map((word: string): number => trie.getPrefixScore(word))
}
