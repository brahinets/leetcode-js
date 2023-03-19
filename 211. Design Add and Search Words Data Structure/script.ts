class WordDictionary {
    private readonly words: Set<string>;

    constructor() {
        this.words = new Set<string>();
    }

    addWord(word: string): void {
        this.words.add(word);
    }

    search(word: string): boolean {
        return [...this.words].find((s: string) => s.length === word.length && s.match(word)) !== undefined;
    }
}