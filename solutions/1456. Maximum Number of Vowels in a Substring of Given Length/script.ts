export {maxVowels}

const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u'];

function isVowel(letter: string): boolean {
    return VOWELS.includes(letter);
}

function maxVowels(s: string, k: number): number {
    let max: number = 0;

    for (let i: number = 0; i <= s.length - k; i++) {
        let count: number = 0;
        for (let j: number = i; j < i + k; j++) {
            if (isVowel(s[j])) {
                count++;
            }
        }

        if (count > max) {
            max = count;
        }
    }

    return max;
}