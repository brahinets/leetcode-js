export {findAnagrams}

function isAnagram(s1: string, s2: string): boolean {
    let chars1: string[] = s1.split("").sort();
    let chars2: string[] = s2.split("").sort();

    if (chars1.length !== chars2.length) {
        return false;
    }

    for (let i: number = 0; i < chars1.length; i++) {
        if (chars1[i] !== chars2[i]) {
            return false;
        }
    }

    return true;
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