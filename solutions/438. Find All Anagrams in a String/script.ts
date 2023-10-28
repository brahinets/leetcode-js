export {findAnagrams}

function countChars(str: string): Map<string, number> {
    const charsCounts: Map<string, number> = new Map<string, number>();

    for (const char of str) {
        let count: number | undefined = charsCounts.get(char);

        if (count === undefined) {
            count = 0;
        }

        charsCounts.set(char, count + 1);
    }

    return charsCounts;
}

const mapsAreEqual = (m1: Map<string, number>, m2: Map<string, number>): boolean => {
    return m1.size === m2.size
        && Array.from(m1.keys()).every((key: string): boolean => m1.get(key) === m2.get(key));
}

function isAnagram(charsCount1: Map<string, number>, charsCount2: Map<string, number>): boolean {
    return mapsAreEqual(charsCount1, charsCount2);
}

function findAnagrams(s: string, p: string): number[] {
    const anagramsBeginnings: number[] = [];
    const charsP: Map<string, number> = countChars(p);

    for (let i: number = 0; i < s.length - p.length + 1; i++) {
        if (isAnagram(countChars(s.substring(i, i + p.length)), charsP)) {
            anagramsBeginnings.push(i);
        }
    }

    return anagramsBeginnings;
}
