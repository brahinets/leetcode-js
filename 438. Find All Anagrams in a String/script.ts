export {findAnagrams}

function isAnagram(s1: string, s2: string): boolean {
    return s1.split("").sort().join() === s2.split("").sort().join();
}

function findAnagrams(s: string, p: string): number[] {
    const anagramsBeginnings: number[] = [];

    for (let i: number = 0; i < s.length - p.length + 1; i++) {
        if (isAnagram(s.substring(i, i + p.length), p)) {
            anagramsBeginnings.push(i);
        }
    }

    return anagramsBeginnings;
}