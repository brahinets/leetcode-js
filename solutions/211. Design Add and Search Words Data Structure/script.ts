class WordDictionary {
    private readonly words: Set<string>;

    constructor() {
        this.words = new Set<string>();
    }

    addWord(word: string): void {
        this.words.add(word);
    }

    search(word: string): boolean {
        for (let w of this.words) {
            if (this.match(word, w)) {
                return true;
            }
        }

        return false;
    }

    private match(target: string, word: string): boolean {
        if (target.length !== word.length) {
            return false;
        }

        const len: number = target.length;
        for (let i: number = 0; i < len; i++) {
            if (target[i] === ".") {
                continue;
            }

            if (target[i] !== word[i]) {
                return false;
            }
        }

        return true;
    }
}