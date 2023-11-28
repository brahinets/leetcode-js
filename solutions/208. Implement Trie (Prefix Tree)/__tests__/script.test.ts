import {Trie} from "../script";

describe('208. Implement Trie (Prefix Tree)', (): void => {

    it('Test', (): void => {
        const trie: Trie = new Trie()
        trie.insert("apple")
        expect(trie.search("apple")).toBe(true)
        expect(trie.search("app")).toBe(false)
        expect(trie.startsWith("app")).toBe(true)
        trie.insert("app")

        trie.search("app")
        expect(trie.search("app")).toBe(true)
    })
})
